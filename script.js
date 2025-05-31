const emergencyData = {
    allergies: {
        title: "Allergic Reactions",
        subtitle: "Severe allergic responses requiring immediate attention",
        steps: [
            "Call emergency services immediately if signs of anaphylaxis (difficulty breathing, swelling, rapid pulse)",
            "Help the person use their epinephrine auto-injector (EpiPen) if available",
            "Remove or avoid the allergen if known and possible",
            "Keep the person calm and seated upright to help breathing",
            "Loosen tight clothing around neck and chest",
            "Monitor breathing and consciousness until help arrives",
            "Be prepared to perform CPR if person becomes unconscious"
        ],
        warning: "Never give anything by mouth to someone having a severe allergic reaction. Always call emergency services for severe reactions."
    },
    bleeding: {
        title: "Bleeding Control",
        subtitle: "Steps to control severe bleeding and prevent shock",
        steps: [
            "Apply direct pressure to the wound with a clean cloth or bandage",
            "Maintain firm, continuous pressure - do not peek at the wound",
            "Elevate the injured area above heart level if possible",
            "If blood soaks through, add more layers without removing the original",
            "Apply pressure to pressure points if bleeding continues",
            "Call emergency services for severe bleeding",
            "Treat for shock - keep person warm and lying down"
        ],
        warning: "Do not remove objects embedded in wounds. Apply pressure around the object instead. Seek immediate medical attention for deep or severe wounds."
    },
    burns: {
        title: "Burns Treatment",
        subtitle: "Treatment for thermal, chemical, and electrical burns",
        steps: [
            "Remove person from heat source safely",
            "Cool the burn with cool (not cold) running water for 10-20 minutes",
            "Remove jewelry and loose clothing before swelling begins",
            "Cover burn with sterile, non-adhesive bandage or clean cloth",
            "Do not break blisters or apply ice, butter, or ointments",
            "Give over-the-counter pain medication if conscious",
            "Seek medical attention for burns larger than palm size or on face/hands"
        ],
        warning: "For chemical burns, flush with water for at least 20 minutes. For electrical burns, ensure power source is turned off before approaching victim."
    },
    shock: {
        title: "Shock Treatment",
        subtitle: "Managing medical shock and circulatory emergencies",
        steps: [
            "Call emergency services immediately",
            "Check and treat obvious injuries causing shock",
            "Have person lie down with legs elevated 12 inches",
            "Keep person warm with blankets but not overheated",
            "Do not give food or water",
            "Monitor breathing and pulse continuously",
            "Be prepared to perform CPR if needed"
        ],
        warning: "Do not elevate legs if you suspect head, neck, back injuries, or broken bones. Do not move person unless absolutely necessary."
    },
    "head-injury": {
        title: "Head Injuries",
        subtitle: "Managing concussions and traumatic head injuries",
        steps: [
            "Keep person still and support head and neck",
            "Control any bleeding with gentle pressure around wound",
            "Monitor consciousness level and breathing",
            "Do not remove objects embedded in skull",
            "Apply ice pack to reduce swelling (wrapped in cloth)",
            "Keep person awake if possible and talk to them",
            "Call emergency services for any loss of consciousness"
        ],
        warning: "Never move someone with suspected neck or spine injury unless absolutely necessary. Watch for signs of brain injury: vomiting, confusion, seizures."
    },
    "heart-attack": {
        title: "Heart Attack",
        subtitle: "Responding to cardiac emergencies and chest pain",
        steps: [
            "Call emergency services immediately",
            "Help person sit comfortably, knees bent, head and shoulders supported",
            "Loosen tight clothing around neck, chest, and waist",
            "Give aspirin if person is conscious and not allergic (chew, don't swallow)",
            "Monitor breathing and pulse continuously",
            "Be prepared to perform CPR if person becomes unconscious",
            "Stay with person and provide reassurance"
        ],
        warning: "Do not give aspirin if person is unconscious, allergic, or has bleeding disorders. Time is critical - call emergency services first."
    },
    poisoning: {
        title: "Poisoning",
        subtitle: "Treatment for toxic substance ingestion or exposure",
        steps: [
            "Call emergency services immediately",
            "Identify the poison if possible (save container/label)",
            "Check person's breathing and consciousness",
            "Do not induce vomiting unless specifically instructed",
            "Remove person from toxic environment if safe to do so",
            "Remove contaminated clothing if skin contact occurred",
            "Follow specific instructions from medical professionals"
        ],
        warning: "Never induce vomiting for corrosive substances (acids, alkalis) or petroleum products. Always contact professionals before taking action."
    },
    "broken-bone": {
        title: "Broken Bones",
        subtitle: "Immobilizing fractures and managing bone injuries",
        steps: [
            "Do not move person unless absolutely necessary",
            "Support the injured area with your hands",
            "Apply ice pack wrapped in cloth to reduce swelling",
            "Immobilize the area with splints if trained to do so",
            "Check circulation below injury (pulse, color, sensation)",
            "Treat for shock if needed",
            "Seek immediate medical attention"
        ],
        warning: "Do not try to realign broken bones. If bone is protruding, do not push it back in. Immobilize the joint above and below the injury."
    },
    unconscious: {
        title: "Unconsciousness",
        subtitle: "Care for unresponsive persons",
        steps: [
            "Check responsiveness by tapping shoulders and shouting",
            "Call emergency services immediately",
            "Check breathing and pulse",
            "Place in recovery position if breathing normally",
            "Keep airway clear - tilt head back, lift chin",
            "Monitor vital signs continuously",
            "Begin CPR if not breathing or no pulse"
        ],
        warning: "Do not give anything by mouth to unconscious person. Do not move if spinal injury is suspected. Be prepared to perform CPR."
    },
    "heat-stroke": {
        title: "Heat Stroke",
        subtitle: "Treatment for severe heat-related emergencies",
        steps: [
            "Move person to cool, shaded area immediately",
            "Remove excess clothing",
            "Apply cool water to skin and fan the person",
            "Apply ice packs to neck, armpits, and groin",
            "Monitor temperature and try to reduce to 102°F",
            "Give cool water if person is conscious and able to swallow",
            "Call emergency services for heat stroke"
        ],
        warning: "Heat stroke is life-threatening. Do not give ice water to drink. Stop cooling when temperature reaches 102°F to prevent overcooling."
    },
    asthma: {
        title: "Asthma Attack",
        subtitle: "Managing severe breathing difficulties",
        steps: [
            "Help person use their rescue inhaler (usually blue)",
            "Have person sit upright, leaning slightly forward",
            "Loosen tight clothing around chest and neck",
            "Encourage slow, deep breathing",
            "Stay calm and reassure the person",
            "Call emergency services if no improvement after inhaler use",
            "Give another dose of inhaler if no improvement in 5-10 minutes"
        ],
        warning: "Call emergency services immediately if person cannot speak in full sentences, has blue lips/fingernails, or shows extreme distress."
    },
    choking: {
        title: "Choking",
        subtitle: "Heimlich maneuver and airway clearance",
        steps: [
            "Ask 'Are you choking?' If person cannot speak, proceed",
            "Stand behind person and wrap arms around waist",
            "Make a fist with one hand, place thumb side against abdomen above navel",
            "Grasp fist with other hand and give quick upward thrusts",
            "Continue until object is expelled or person becomes unconscious",
            "If person becomes unconscious, begin CPR",
            "Call emergency services"
        ],
        warning: "For pregnant women or large persons, give chest thrusts instead of abdominal thrusts. For infants, use back blows and chest thrusts."
    },
    "snake-bite": {
        title: "Snake Bite Emergency",
        subtitle: "Treatment for venomous snake bites in Nigeria",
        steps: [
            "Keep the person calm and still to slow venom spread",
            "Remove jewelry and tight clothing before swelling begins",
            "Keep the bitten limb lower than the heart",
            "Immobilize the limb with a splint if possible",
            "Mark the edge of swelling with a pen and time",
            "Get to the nearest hospital immediately for antivenom",
            "Call ahead to ensure antivenom availability"
        ],
        warning: "Do NOT cut the wound, apply ice, or use a tourniquet. Do not attempt to catch or kill the snake. Time is critical - get medical help immediately."
    },
    "malaria-emergency": {
        title: "Severe Malaria Crisis",
        subtitle: "Managing life-threatening malaria complications",
        steps: [
            "Check for severe symptoms: convulsions, unconsciousness, difficulty breathing",
            "Keep person cool and comfortable",
            "Give paracetamol to reduce fever (not aspirin)",
            "Ensure person can swallow before giving medication",
            "Keep airway clear if unconscious",
            "Rush to nearest hospital immediately",
            "Bring any malaria medication currently being taken"
        ],
        warning: "Cerebral malaria is life-threatening. Never give aspirin for fever. Get immediate medical attention for convulsions or unconsciousness."
    },
    "local-poisoning": {
        title: "Local Plant/Herb Poisoning",
        subtitle: "Traditional medicine and local plant toxicity",
        steps: [
            "Identify the plant or herb if possible",
            "Do not induce vomiting unless advised by medical professional",
            "Give small sips of water if person is conscious",
            "Remove any remaining plant material from mouth",
            "Monitor breathing and consciousness",
            "Get to hospital immediately with sample of plant/herb",
            "Contact poison control if available"
        ],
        warning: "Some traditional herbs can be toxic in large amounts. Always inform medical staff about any herbal remedies taken. Keep plant samples for identification."
    },
    "harmattan-issues": {
        title: "Harmattan Health Emergency",
        subtitle: "Severe dehydration and respiratory distress",
        steps: [
            "Move person to humid, dust-free environment",
            "Give small, frequent sips of ORS solution",
            "Use damp cloth to clean dust from nose and mouth",
            "Apply petroleum jelly to cracked lips and nostrils",
            "Monitor for signs of severe dehydration",
            "Seek medical help if breathing difficulties persist",
            "Use humidifier or wet towels to increase air moisture"
        ],
        warning: "Dehydration can be severe during Harmattan. Watch for confusion, dizziness, or decreased urination. Seek medical help immediately for breathing difficulties."
    }
};

const modal = document.getElementById('emergencyModal');
const closeBtn = document.querySelector('.close');
const searchBox = document.getElementById('searchBox');
const categoriesGrid = document.getElementById('categoriesGrid');

// Tab functionality
document.querySelectorAll('.nav-tab').forEach(tab => {
    tab.addEventListener('click', function() {
        // Remove active class from all tabs and contents
        document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        
        // Add active class to clicked tab
        this.classList.add('active');
        
        // Show corresponding content
        const tabId = this.dataset.tab;
        document.getElementById(tabId).classList.add('active');
    });
});

// Open modal when category card is clicked
document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', function() {
        const category = this.dataset.category;
        const data = emergencyData[category];
        if (data) {
            document.getElementById('modalTitle').textContent = data.title;
            document.getElementById('modalSubtitle').textContent = data.subtitle;
            
            const stepsHtml = data.steps.map(step => `<li>${step}</li>`).join('');
            const warningHtml = data.warning ? 
                `<div class="warning-box">
                    <h4>⚠️ Important Warning</h4>
                    <p>${data.warning}</p>
                </div>` : '';
            
            document.getElementById('modalBody').innerHTML = `
                ${warningHtml}
                <h3 style="margin-bottom: 15px; color: #2c3e50;">Emergency Steps:</h3>
                <ol class="steps">${stepsHtml}</ol>
            `;
            
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    });
});

// Close modal
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        closeModal();
    }
});

function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Search functionality
searchBox.addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const cards = document.querySelectorAll('.category-card');
    
    cards.forEach(card => {
        const title = card.querySelector('.card-title').textContent.toLowerCase();
        const subtitle = card.querySelector('.card-subtitle').textContent.toLowerCase();
        const info = card.querySelector('.card-info').textContent.toLowerCase();
        
        if (title.includes(searchTerm) || subtitle.includes(searchTerm) || info.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

// ESC key to close modal
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});