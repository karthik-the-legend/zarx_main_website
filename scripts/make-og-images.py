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
    "default": ("Senior product engineering,", "accelerated by AI.", "Founder-led product studio · New Delhi"),
    "home": ("From idea to reality.", "Built to scale.", "AI-accelerated product studio · New Delhi"),
    "solutions": ("Tell us the goal.", "We'll assemble the team.", "Solutions"),
    "service-web-platforms": ("Web apps that load fast", "and grow with you.", "Web Platforms"),
    "service-mobile-gaming": ("Apps and games", "people keep opening.", "Mobile & Gaming Apps"),
    "service-web3": ("On-chain products", "built to pass an audit.", "Web3 Products"),
    "service-ai-automation": ("AI that does real work,", "and proves it.", "AI Builders & Automation"),
    "service-ui-ux-design": ("Interfaces users understand", "on first use.", "UI/UX Design"),
    "service-animation": ("Motion that explains", "and sells.", "Animation & Visual Systems"),
    "why-zarx": ("Big-studio quality.", "Startup speed. Your IP.", "Why ZARX"),
    "process": ("No black boxes.", "A demo every week.", "Our process"),
    "leadership": ("The people accountable", "for your product.", "Leadership"),
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
    big, small = font(True, 72), font(False, 28)
    for name, (line1, line2, footer) in CARDS.items():
        img = Image.new("RGB", (W, H), NIGHT)
        d = ImageDraw.Draw(img)
        img.paste(logo, (80, 72), logo)
        d.text((76, 300), line1, font=big, fill=FG)
        d.text((76, 384), line2, font=big, fill=MUTED)
        d.rectangle((80, 548, 120, 550), fill=ACCENT)
        d.text((136, 530), footer, font=small, fill=MUTED)
        img.save(OUT / f"{name}.png", optimize=True)
    print(f"wrote {len(CARDS)} cards to {OUT}")


if __name__ == "__main__":
    main()
