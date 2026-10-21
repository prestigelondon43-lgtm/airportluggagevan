const fs = require('fs');
const path = require('path');

const files = [
    'index.html',
    'worldwide.html',
    'service.html',
    'fleet.html',
    'contact.html',
    'about.html',
    'booking.html',
    'airport-details.html'
];

const newFooter = `    <!-- ================= BRAND FOOTER WITH LARGER LOGO & RELEVANT INTERNAL LINKS ================= -->
    <style>
        .custom-footer {
            background-color: #0b0b0b;
            color: #a3a3a3;
            font-family: 'Inter', sans-serif;
            padding: 60px 20px 20px 20px;
            border-top: 1px solid #1f1f1f;
        }
        .custom-footer a {
            color: #a3a3a3;
            text-decoration: none;
            transition: all 0.3s ease;
        }
        .custom-footer ul li a {
            display: inline-block;
            transition: color 0.3s ease, padding-left 0.3s ease;
        }
        .custom-footer ul li a:hover {
            color: #d4af37;
            padding-left: 6px;
        }
        .custom-footer ul li a::before {
            content: '— ';
            color: #d4af37;
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        .custom-footer ul li a:hover::before {
            opacity: 1;
        }
        .custom-footer .social-icons {
            display: flex;
            gap: 12px;
            margin-top: 15px;
        }
        .custom-footer .social-icons a {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: #1a1a1a;
            border: 1px solid #2a2a2a;
            color: #a3a3a3;
            transition: all 0.3s ease;
            padding-left: 0 !important;
        }
        .custom-footer .social-icons a:hover {
            background: #d4af37;
            border-color: #d4af37;
            color: #000;
            transform: translateY(-4px);
            box-shadow: 0 6px 20px rgba(212, 175, 55, 0.35);
        }
        .custom-footer .social-icons svg {
            width: 16px;
            height: 16px;
            fill: currentColor;
        }
        .custom-footer h4 {
            color: #ffffff;
            font-size: 13px;
            letter-spacing: 2px;
            margin-bottom: 24px;
            font-weight: 700;
            position: relative;
            display: inline-block;
            padding-bottom: 10px;
        }
        .custom-footer h4::after {
            content: '';
            position: absolute;
            left: 0;
            bottom: 0;
            width: 28px;
            height: 2px;
            background: linear-gradient(90deg, #d4af37, #fef08a);
            border-radius: 2px;
            transition: width 0.4s ease;
        }
        .custom-footer .footer-col:hover h4::after {
            width: 100%;
        }
        .custom-footer .footer-contact-item {
            display: flex;
            align-items: flex-start;
            gap: 10px;
            font-size: 13px;
            margin-bottom: 12px;
            line-height: 1.5;
        }
        .custom-footer .footer-contact-icon {
            font-size: 15px;
            margin-top: 1px;
            flex-shrink: 0;
        }
        .custom-footer .footer-divider {
            max-width: 1200px;
            margin: 0 auto 30px auto;
            height: 1px;
            background: linear-gradient(90deg, transparent, #1f1f1f 20%, #d4af37 50%, #1f1f1f 80%, transparent);
        }
        .footer-bottom-wrap {
            max-width: 1200px;
            margin: 0 auto;
            border-top: 1px solid #1f1f1f;
            padding-top: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;
            text-align: center;
        }
        .footer-bottom-nav {
            display: flex;
            flex-wrap: wrap;
            gap: 8px 20px;
            justify-content: center;
        }
        .footer-bottom-nav a {
            color: #555 !important;
            font-size: 11px;
            letter-spacing: 1px;
            text-transform: uppercase;
            transition: color 0.3s ease !important;
            padding-left: 0 !important;
        }
        .footer-bottom-nav a:hover {
            color: #d4af37 !important;
        }
        .footer-bottom-copy {
            font-size: 11px;
            letter-spacing: 0.5px;
            color: #3a3a3a;
        }
    </style>
    <footer class="custom-footer">
        <div style="max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: repeat(auto-fit, minmax(190px, 1fr)); gap: 40px; margin-bottom: 40px;">

            <!-- Col 1: Brand & License -->
            <div class="footer-col">
                <img src="airport lugguage van london logo.png" alt="Airport Luggage Van Logo" style="height: 75px; width: auto; object-fit: contain; margin-bottom: 18px; filter: brightness(1.05);" />
                <p style="font-size: 13px; line-height: 1.7; margin-bottom: 20px; color: #707070;">Elite multi-capacity travel coordination engineered for critical airport baggage allowances and luxurious group logistics.</p>
                <div style="font-size: 12px; color: #a3a3a3; border-left: 2px solid #333; padding: 6px 12px; background: rgba(255,255,255,0.03); border-radius: 0 4px 4px 0;">
                    <span style="letter-spacing: 0.5px; font-weight: 500;">License No: 11678</span>
                </div>
            </div>

            <!-- Col 2: Our Services -->
            <div class="footer-col">
                <h4>OUR SERVICES</h4>
                <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 10px; font-size: 13px;">
                    <li><a href="service.html">Airport Luggage Transfers</a></li>
                    <li><a href="service.html">Touring Luggage Transfers</a></li>
                    <li><a href="service.html">Corporate Luggage Transfers</a></li>
                    <li><a href="service.html">Business Luggage Transfers</a></li>
                    <li><a href="service.html">First Class Luggage Transfers</a></li>
                    <li><a href="service.html">Wedding Luggage Transfers</a></li>
                </ul>
            </div>

            <!-- Col 3: Luggage Vans Fleet -->
            <div class="footer-col">
                <h4>LUGGAGE VANS FLEET</h4>
                <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 10px; font-size: 13px; margin-bottom: 30px;">
                    <li><a href="fleet.html">MWB Vans</a></li>
                    <li><a href="fleet.html">LWB Vans</a></li>
                    <li><a href="fleet.html">Luton Cargo Vans</a></li>
                </ul>

            </div>

            <!-- Col 4: London Airports -->
            <div class="footer-col">
                <h4>LONDON AIRPORTS</h4>
                <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 10px; font-size: 13px;">
                    <li><a href="airport-details.html?airport=heathrow">London Heathrow Airport</a></li>
                    <li><a href="airport-details.html?airport=gatwick">London Gatwick Airport</a></li>
                    <li><a href="airport-details.html?airport=city">London City Airport</a></li>
                    <li><a href="airport-details.html?airport=private">London Private Airport</a></li>
                    <li><a href="airport-details.html?airport=stansted">London Stansted Airport</a></li>
                    <li><a href="airport-details.html?airport=southend">London Southend Airport</a></li>
                    <li><a href="airport-details.html?airport=luton">London Luton Airport</a></li>
                    <li><a href="airport-details.html?airport=windsor">Windsor Suite Heathrow</a></li>
                </ul>
            </div>

            <!-- Col 5: Private Airports -->
            <div class="footer-col">
                <h4>PRIVATE AIRPORTS</h4>
                <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 10px; font-size: 13px;">
                    <li><a href="airport-details.html?airport=farnborough">Farnborough Executive Airport</a></li>
                    <li><a href="airport-details.html?airport=biggin-hill">Biggin Hill Airport</a></li>
                    <li><a href="airport-details.html?airport=blackbushe">Blackbushe Airport</a></li>
                    <li><a href="airport-details.html?airport=northolt">Northolt Airport</a></li>
                    <li><a href="airport-details.html?airport=oxford">London Oxford Airport</a></li>
                    <li><a href="airport-details.html?airport=london-farnborough">London Farnborough Airport</a></li>
                    <li><a href="airport-details.html?airport=jet-centre">London Jet Centre</a></li>
                    <li><a href="airport-details.html?airport=cruise-ports">London Cruise Ports</a></li>
                </ul>
            </div>

            <!-- Col 5: Contact & Social -->
            <div class="footer-col">
                <h4>Contact Us</h4>
                <div class="footer-contact-item">
                    <span class="footer-contact-icon">📞</span>
                    <a href="tel:+442038277777" style="font-size:13px;">+44 203 827 7777</a>
                </div>
                <div class="footer-contact-item">
                    <span class="footer-contact-icon">📧</span>
                    <a href="mailto:bookings@airportluggagevans.com" style="font-size:13px;">bookings@airportluggagevan.com</a>
                </div>
                <div class="footer-contact-item">
                    <span class="footer-contact-icon">📍</span>
                    <span style="font-size:13px;">Airport Luggage Van, London, CR7 8DP</span>
                </div>

                <!-- Social Icons with inline SVG -->
                <div style="margin-top: 8px; margin-bottom: 8px;">
                    <p style="font-size: 11px; letter-spacing: 1.5px; color: #555; text-transform: uppercase; margin-bottom: 12px;">Follow Us</p>
                </div>
                <div class="social-icons">
                    <!-- Facebook -->
                    <a href="https://www.facebook.com/airportluggagevans" target="_blank" rel="noopener" aria-label="Facebook" title="Follow us on Facebook">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                    </a>
                    <!-- Instagram -->
                    <a href="https://www.instagram.com/airportluggagevanz" target="_blank" rel="noopener" aria-label="Instagram" title="Follow us on Instagram">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>

        <div class="footer-bottom-wrap" style="padding-top: 20px;">
            <div class="footer-bottom-nav">
                <a href="index.html">Home</a>
                <a href="about.html">About</a>
                <a href="service.html">Services</a>
                <a href="fleet.html">Fleet</a>
                <a href="worldwide.html">Worldwide</a>
                <a href="contact.html">Contact</a>
                <a href="booking.html">Book Now</a>
            </div>
            <p class="footer-bottom-copy">&copy; 2026 AIRPORT LUGGAGE VAN &nbsp;|&nbsp; ALL RIGHTS RESERVED &nbsp;|&nbsp; MANAGED WITH ABSOLUTE SECURITY AND DISCRETION.</p>
        </div>
    </footer>`;

const basePath = __dirname;

files.forEach(file => {
    const filePath = path.join(basePath, file);
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        const regex = /<!-- ================= BRAND FOOTER WITH LARGER LOGO & RELEVANT INTERNAL LINKS ================= -->[\s\S]*?<\/footer>/;

        if (regex.test(content)) {
            content = content.replace(regex, newFooter);
            fs.writeFileSync(filePath, content, 'utf8');
            console.log("Successfully updated " + file);
        } else {
            console.log("Footer not found in " + file);
        }
    } catch (err) {
        console.error("Error processing " + file + ": " + err.message);
    }
});
