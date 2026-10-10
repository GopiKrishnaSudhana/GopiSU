// Initialize Lucide icons
lucide.createIcons();

// Mobile Menu Toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Contact Form Submission with EmailJS Integration
const contactForm = document.getElementById('contact-form');
const messageModal = document.getElementById('message-modal');
const modalCloseBtn = document.getElementById('modal-close-btn');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const templateParams = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    const serviceID = 'service_52n4umb';
    const templateID = 'template_rhg3zbb';

    emailjs.send(serviceID, templateID, templateParams)
        .then(() => {
            messageModal.classList.remove('hidden');
            contactForm.reset();
        }, (error) => {
            console.error('FAILED...', error);
            alert('Failed to send message. Please try emailing directly at gopi.sudhana@gmail.com');
        });
});

modalCloseBtn.addEventListener('click', () => {
    messageModal.classList.add('hidden');
});

messageModal.addEventListener('click', (e) => {
    if (e.target === messageModal) {
        messageModal.classList.add('hidden');
    }
});

// 1. Render About Section
function renderAboutSection() {
    const aboutData = [
        {
            icon: 'landmark',
            color: 'apple-accent',
            title: 'Banking & Fintech',
            desc: 'Architecting secure banking portals with end-to-end encryption, multi-factor biometric authentication, real-time transaction processing, and strict compliance standards.',
            tags: ['Secure Enclave', 'Keychain API', 'OAuth 2.0']
        },
        {
            icon: 'wifi',
            color: 'apple-purple',
            title: 'IoT Integrations',
            desc: 'Connecting iPhones to physical hardware devices via CoreBluetooth, Wi-Fi mesh networking, and custom peripherals with low latency and rock-solid connection reliability.',
            tags: ['CoreBluetooth', 'ExternalAccessory', 'MQTT']
        },
        {
            icon: 'layers',
            color: 'apple-green',
            title: 'Product-Based Scale',
            desc: 'Building modular, testable, and reactive codebases using Clean Architecture, VIPER, MVVM, and SwiftUI for fast feature delivery across global product lifecycles.',
            tags: ['SwiftUI', 'Combine', 'Modularization']
        }
    ];

    const grid = document.getElementById('about-grid');
    if (grid) {
        grid.innerHTML = aboutData.map(item => `
            <div class="glass-panel p-8 rounded-3xl glass-panel-hover space-y-4 relative overflow-hidden group">
                <div class="absolute top-0 right-0 w-32 h-32 bg-${item.color}/10 rounded-full blur-2xl group-hover:bg-${item.color}/20 transition-all"></div>
                <div class="w-12 h-12 rounded-2xl bg-${item.color}/20 text-${item.color} flex items-center justify-center">
                    <i data-lucide="${item.icon}" class="w-6 h-6"></i>
                </div>
                <h4 class="text-xl font-bold text-white">${item.title}</h4>
                <p class="text-gray-400 text-sm leading-relaxed">${item.desc}</p>
                <div class="pt-4 flex flex-wrap gap-2">
                    ${item.tags.map(tag => `<span class="px-3 py-1 rounded-full text-xs bg-white/5 text-gray-300 font-mono">${tag}</span>`).join('')}
                </div>
            </div>
        `).join('');
    }
}

// 2. Render Experience Section
function renderExperienceSection() {
    const experienceData = [
        {
            role: 'Senior iOS Engineer',
            team: 'Product & Fintech Ecosystems',
            badge: 'Present',
            badgeColor: 'bg-apple-accent/20 text-apple-accent',
            borderColor: 'border-apple-accent',
            teamColor: 'text-apple-accent',
            dotColor: 'bg-apple-accent',
            desc: 'Spearheading native iOS architecture updates for multi-million user products. Implemented robust modularization using Swift Package Manager, reducing build times by 40% and integrating high-security biometric protocols for banking transactions.',
            tags: ['Swift 5.9', 'SwiftUI', 'Combine', 'VIPER']
        },
        {
            role: 'iOS Engineer - IoT & Hardware',
            team: 'Connected Devices & Smart Hardware',
            badge: 'Advanced Experience',
            badgeColor: 'bg-white/10 text-gray-300',
            borderColor: 'border-apple-purple',
            teamColor: 'text-apple-purple',
            dotColor: 'bg-apple-purple',
            desc: 'Engineered seamless BLE (Bluetooth Low Energy) communication pipelines connecting iOS mobile apps to physical smart hardware sensors. Designed resilient background sync queues and real-time telemetry charting interfaces.',
            tags: ['CoreBluetooth', 'Background Tasks', 'Charts API']
        },
        {
            role: 'iOS Developer',
            team: 'Product-Based Enterprise Apps',
            badge: 'Foundational Growth',
            badgeColor: 'bg-white/10 text-gray-300',
            borderColor: 'border-apple-green',
            teamColor: 'text-apple-green',
            dotColor: 'bg-apple-green',
            desc: "Developed high-performance native iOS applications from scratch. Collaborated closely with UI/UX designers adhering strictly to Apple's Human Interface Guidelines to deliver buttery-smooth 60/120fps animations and intuitive gesture interactions.",
            tags: ['UIKit', 'MVVM', 'REST APIs', 'XCTest']
        }
    ];

    const timeline = document.getElementById('experience-timeline');
    if (timeline) {
        timeline.innerHTML = experienceData.map(item => `
            <div class="relative pl-8 sm:pl-12 group">
                <div class="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-apple-card border-2 ${item.borderColor} flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform">
                    <div class="w-2.5 h-2.5 rounded-full ${item.dotColor}"></div>
                </div>
                <div class="glass-panel p-6 sm:p-8 rounded-3xl glass-panel-hover space-y-4">
                    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div>
                            <h4 class="text-xl font-bold text-white">${item.role}</h4>
                            <span class="${item.teamColor} font-medium text-sm">${item.team}</span>
                        </div>
                        <span class="px-3 py-1 rounded-full text-xs ${item.badgeColor} font-mono w-fit">${item.badge}</span>
                    </div>
                    <p class="text-gray-400 text-sm leading-relaxed">${item.desc}</p>
                    <div class="flex flex-wrap gap-2 pt-2">
                        ${item.tags.map(tag => `<span class="px-3 py-1 rounded-full text-xs bg-white/5 text-gray-300">${tag}</span>`).join('')}
                    </div>
                </div>
            </div>
        `).join('');
    }
}

// 3. Render Expertise Section
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
        grid.innerHTML = expertiseData.map(category => `
            <div class="glass-panel p-6 rounded-3xl space-y-4">
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
            </div>
        `).join('');
    }
}

// 4. Render Projects Section
function renderProjectsSection() {
    const projectsData = [
        {
            badge: 'Fintech / Banking',
            badgeColor: 'bg-apple-accent/20 text-apple-accent',
            icon: 'landmark',
            iconColor: 'text-apple-accent',
            title: 'Secure Wealth Banking Portal',
            desc: 'Enterprise-grade iOS banking application supporting real-time fund transfers, end-to-end encrypted session tokens, FaceID verification, and localized multi-currency support.',
            tags: ['SwiftUI', 'Combine', 'Keychain'],
            os: 'iOS 16.0+',
            status: 'Production Ready',
            statusColor: 'text-apple-accent'
        },
        {
            badge: 'IoT / Hardware',
            badgeColor: 'bg-apple-purple/20 text-apple-purple',
            icon: 'cpu',
            iconColor: 'text-apple-purple',
            title: 'Smart Device BLE Controller',
            desc: 'Companion iOS application for IoT connected hardware sensors. Manages real-time Bluetooth peripheral connections, background data synchronization, and automated firmware updates.',
            tags: ['CoreBluetooth', 'Combine', 'Async/Await'],
            os: 'iOS 15.0+',
            status: 'Hardware Synced',
            statusColor: 'text-apple-purple'
        },
        {
            badge: 'Product / SaaS',
            badgeColor: 'bg-apple-green/20 text-apple-green',
            icon: 'shopping-bag',
            iconColor: 'text-apple-green',
            title: 'Modular Enterprise Ecosystem',
            desc: 'Scalable product app built with strict modular architecture using Swift Package Manager. Features offline-first caching, dynamic UI rendering, and comprehensive XCTest suites.',
            tags: ['SwiftUI', 'SPM', 'VIPER'],
            os: 'iOS 16.0+',
            status: 'Modularized',
            statusColor: 'text-apple-green'
        },
        {
            badge: 'Product / SaaS',
            badgeColor: 'bg-apple-olive/20 text-apple-olive',
            icon: 'shopping-bag',
            iconColor: 'text-apple-olive',
            title: 'Modular Enterprise Ecosystem',
            desc: 'Scalable product app built with strict modular architecture using Swift Package Manager. Features offline-first caching, dynamic UI rendering, and comprehensive XCTest suites.',
            tags: ['SwiftUI', 'SPM', 'VIPER'],
            os: 'iOS 16.0+',
            status: 'Modularized',
            statusColor: 'text-apple-olive'
        }
    ];

    const grid = document.getElementById('projects-grid');
    if (!grid) return;

    grid.innerHTML = projectsData.map((project, index) => {
        const isOddExtra = (index >= 3 && projectsData.length % 3 === 1);
        const extraClass = isOddExtra ? 'lg:col-start-2' : '';

        return `
            <div class="glass-panel rounded-3xl overflow-hidden glass-panel-hover flex flex-col justify-between group project-card ${extraClass}" style="animation-delay: ${index * 0.08}s">
                <div class="p-6 sm:p-8 space-y-4">
                    <div class="flex items-center justify-between">
                        <span class="px-3 py-1 rounded-full text-xs ${project.badgeColor} font-mono">${project.badge}</span>
                        <i data-lucide="${project.icon}" class="w-5 h-5 ${project.iconColor}"></i>
                    </div>
                    <h4 class="text-xl font-bold text-white group-hover:${project.iconColor} transition-colors">${project.title}</h4>
                    <p class="text-gray-400 text-sm leading-relaxed">${project.desc}</p>
                    <div class="flex flex-wrap gap-2 pt-2">
                        ${project.tags.map(tag => `<span class="px-2.5 py-1 rounded text-xs bg-white/5 text-gray-300">${tag}</span>`).join('')}
                    </div>
                </div>
                <div class="px-6 pb-6 pt-2 border-t border-white/5 flex items-center justify-between">
                    <span class="text-xs text-gray-400">${project.os}</span>
                    <div class="flex items-center space-x-2 text-xs ${project.statusColor} font-medium">
                        <span>${project.status}</span>
                        <i data-lucide="check-circle-2" class="w-4 h-4"></i>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    lucide.createIcons();
}

// Initialize all sections
renderAboutSection();
renderExperienceSection();
renderExpertiseSection();
renderProjectsSection();

lucide.createIcons();
