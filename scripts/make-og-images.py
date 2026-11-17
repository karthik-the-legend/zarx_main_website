"""Renders the 1200x630 share cards in public/og/ from the ZARX wordmark.

Run after changing page headlines:  python scripts/make-og-images.py
Needs Pillow (pip install pillow). Uses Segoe UI on Windows, DejaVu Sans elsewhere.
"""
from pathlib import Path
import os

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "public" / "og"
W, H = 1200, 630
NIGHT, FG, MUTED, ACCENT = (16, 24, 40), (249, 250, 251), (152, 162, 179), (132, 173, 255)

CARDS = {
    "default": ("Business growth and technology,", "under one roof.", "Business & technology consultancy · New Delhi"),
    "home": ("Business growth and technology,", "under one roof.", "Business & technology consultancy · New Delhi"),
    "business-consultancy": ("Grow with the right customers,", "capital and partners.", "Business Consultancy"),
    "technology-consultancy": ("From idea to reality.", "Built to scale.", "Technology Consultancy"),
    "service-digital-marketing": ("Marketing that brings in", "customers, not just clicks.", "Digital Marketing"),
    "service-influencer-marketing": ("Creator campaigns that reach", "the right people.", "Influencer Marketing"),
    "service-fundraising-sponsorship": ("Get ready for investors", "and sponsors.", "Fundraising & Sponsorship Partnerships"),
    "service-brand-partnerships": ("Partnerships with brands", "your customers love.", "Brand Partnerships"),
    "solutions": ("Tell us the goal.", "We'll assemble the team.", "Solutions"),
    "service-web-platforms": ("Web apps that load fast", "and grow with you.", "Web Platforms"),
    "service-mobile-gaming": ("Apps and games", "people keep opening.", "Mobile & Gaming Apps"),
    "service-web3": ("On-chain products", "built to pass an audit.", "Web3 Products"),
    "service-ai-automation": ("AI that does real work,", "and proves it.", "AI Builders & Automation"),
    "service-ui-ux-design": ("Interfaces users understand", "on first use.", "UI/UX Design"),
    "service-animation": ("Motion that explains", "and sells.", "Animation & Visual Systems"),
    "why-zarx": ("Senior people. Clear numbers.", "Everything in your name.", "Why ZARX"),
    "process": ("No black boxes.", "A demo every week.", "Our process"),
    "partners": ("Build the next wave", "of products with us.", "Investors & Partners"),
    "contact": ("Let's talk about what", "you're building.", "Book a free 30-minute call"),
    "careers": ("Build products", "people remember.", "Careers"),
    "work": ("Products we've taken", "from idea to live.", "Our work"),
    "insights": ("Notes from", "the build floor.", "Insights"),
    "trust": ("IP, security and data –", "in one place.", "Trust Center"),
}


def font(bold: bool, size: int):
    candidates = (
        [r"C:\Windows\Fonts\segoeuib.ttf", "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"]
        if bold
        else [r"C:\Windows\Fonts\segoeui.ttf", "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"]
    )
    for path in candidates:
        if os.path.exists(path):
            return ImageFont.truetype(path, size)
    return ImageFont.load_default()


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    logo = Image.open(ROOT / "public" / "zarx-wordmark-light.png")
    lw = 170
    logo = logo.resize((lw, round(logo.height * lw / logo.width)), Image.LANCZOS)
    small = font(False, 28)
    for name, (line1, line2, footer) in CARDS.items():
        img = Image.new("RGB", (W, H), NIGHT)
        d = ImageDraw.Draw(img)
        img.paste(logo, (80, 72), logo)
        # Largest size up to 72px at which both headline lines fit inside the side margins.
        size = 72
        big = font(True, size)
        while size > 40 and max(d.textlength(line1, font=big), d.textlength(line2, font=big)) > W - 2 * 80:
            size -= 2
            big = font(True, size)
        d.text((76, 300), line1, font=big, fill=FG)
        d.text((76, 300 + round(size * 1.17)), line2, font=big, fill=MUTED)
        d.rectangle((80, 548, 120, 550), fill=ACCENT)
        d.text((136, 530), footer, font=small, fill=MUTED)
        img.save(OUT / f"{name}.png", optimize=True)
    print(f"wrote {len(CARDS)} cards to {OUT}")


if __name__ == "__main__":
    main()
