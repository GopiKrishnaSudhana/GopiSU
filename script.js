 // Initialize Lucide icons
        lucide.createIcons();

        // Mobile Menu Toggle
        const menuBtn = document.getElementById('menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');

        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Close mobile menu when clicking nav links
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });

        // Contact Form Handling with Custom Modal (No alerts)
        const contactForm = document.getElementById('contact-form');
        const messageModal = document.getElementById('message-modal');
        const modalCloseBtn = document.getElementById('modal-close-btn');

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            // Simulate successful dispatch
            messageModal.classList.remove('hidden');
            contactForm.reset();
        });

        modalCloseBtn.addEventListener('click', () => {
            messageModal.classList.add('hidden');
        });

        // Close modal on background click
        messageModal.addEventListener('click', (e) => {
            if (e.target === messageModal) {
                messageModal.classList.add('hidden');
            }
        });

        // Generate Expertise Section dynamically to reduce HTML repetition
        function renderExpertiseSection() {
            const expertiseData = [
                {
                    icon: 'code',
                    color: 'apple-accent',
                    title: 'Languages & Frameworks',
                    skills: ['Swift & Objective-C', 'SwiftUI & UIKit', 'Combine & Async/Await', 'WidgetKit & StoreKit']
                },
                {
                    icon: 'cpu',
                    color: 'apple-purple',
                    title: 'IoT & Hardware',
                    skills: ['CoreBluetooth / BLE', 'External Accessory Framework', 'MQTT & WebSockets', 'Sensor Data Streaming']
                },
                {
                    icon: 'shield',
                    color: 'apple-green',
                    title: 'Security & Architecture',
                    skills: ['VIPER, MVVM & Clean Architecture', 'Keychain & Secure Enclave', 'Biometric Authentication', 'Swift Package Manager']
                },
                {
                    icon: 'git-branch',
                    color: 'apple-orange',
                    title: 'Tools & CI/CD',
                    skills: ['Xcode & Instruments', 'Git & GitHub Actions', 'Fastlane Automation', 'XCTest & XCUITest']
                }
            ];

            const grid = document.getElementById('expertise-grid');
            if (grid) {
                expertiseData.forEach(category => {
                    const card = document.createElement('div');
                    card.className = 'glass-panel p-6 rounded-3xl space-y-4';
                    card.innerHTML = `
                        <div class="w-10 h-10 rounded-xl bg-${category.color}/20 text-${category.color} flex items-center justify-center">
                            <i data-lucide="${category.icon}" class="w-5 h-5"></i>
                        </div>
                        <h4 class="text-lg font-bold text-white">${category.title}</h4>
                        <ul class="space-y-2 text-sm text-gray-400">
                            ${category.skills.map(skill => `
                                <li class="flex items-center space-x-2">
                                    <span class="w-1.5 h-1.5 rounded-full bg-${category.color}"></span>
                                    <span>${skill}</span>
                                </li>
                            `).join('')}
                        </ul>
                    `;
                    grid.appendChild(card);
                });

                // Re-initialize Lucide icons for the dynamically created elements
                lucide.createIcons();
            }
        }

        renderExpertiseSection();
