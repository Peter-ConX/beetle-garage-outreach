export interface ServiceItem {
  id: string;
  num: string;
  title: string;
  description: string;
  tag: string;
  iconName: string;
}

export interface WhyUsItem {
  num: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ProcessStepItem {
  step: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
  isPlaceholder?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  isRealLocation?: boolean;
}

export const GARAGE_DATA = {
  businessName: "Beetle Garage",
  tagline: "Independent Vehicle Servicing & Repairs in Corby",
  address: {
    unit: "Unit 10",
    street: "Brunel Road",
    town: "Corby",
    postcode: "NN17 4AU",
    country: "United Kingdom",
    full: "Unit 10, Brunel Road, Corby, NN17 4AU, United Kingdom",
    plusCode: "G864+2Q Corby"
  },
  phone: "07522 574716",
  phoneFormatted: "07522 574716",
  phoneInt: "+44 7522 574716",
  phoneTelLink: "tel:+447522574716",
  whatsapp: "+44 7522 574716",
  whatsappLink: "https://wa.me/447522574716?text=Hi%20Beetle%20Garage%2C%20I%27d%20like%20to%20enquire%20about%20my%20vehicle.",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Unit+10+Brunel+Rd+Corby+NN17+4AU",
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2439.123!2d-0.6789!3d52.4987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48777598710b784d%3A0x86134bdf8385a!2sUnit%2010%2C%20Brunel%20Rd%2C%20Corby%20NN17%204AU!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk",
  openingHours: {
    days: "Monday–Friday",
    times: "09:00–17:00",
    full: "Monday–Friday: 09:00–17:00",
    weekend: "Closed"
  },
  logoUrl: "/images/beetle-garage-logo.png",
  
  services: [
    {
      id: "vehicle-servicing",
      num: "01",
      title: "VEHICLE SERVICING",
      description: "Routine vehicle servicing and maintenance to keep your car running reliably.",
      tag: "ROUTINE CARE",
      iconName: "Wrench"
    },
    {
      id: "brake-repairs",
      num: "02",
      title: "BRAKE REPAIRS",
      description: "Brake inspection, maintenance and repair enquiries for safety and stopping performance.",
      tag: "BRAKE SYSTEM",
      iconName: "Disc"
    },
    {
      id: "engine-diagnostics",
      num: "03",
      title: "ENGINE DIAGNOSTICS",
      description: "Investigating warning lights, engine faults and vehicle electrical issues.",
      tag: "FAULT CHECK",
      iconName: "Cpu"
    },
    {
      id: "battery-electrical",
      num: "04",
      title: "BATTERY & ELECTRICAL",
      description: "Battery testing, replacement and electrical fault enquiries for reliable starting.",
      tag: "ELECTRICAL",
      iconName: "Zap"
    },
    {
      id: "exhaust-emissions",
      num: "05",
      title: "EXHAUST & EMISSIONS",
      description: "Exhaust system inspections and emissions-related repair enquiries.",
      tag: "EXHAUST",
      iconName: "Wind"
    },
    {
      id: "general-mechanical",
      num: "06",
      title: "GENERAL MECHANICAL REPAIRS",
      description: "Practical mechanical repair and ongoing maintenance enquiries for all vehicle components.",
      tag: "MECHANICAL",
      iconName: "Cog"
    },
    {
      id: "suspension-steering",
      num: "07",
      title: "SUSPENSION & STEERING",
      description: "Suspension noise, shock absorber and steering-related repair enquiries.",
      tag: "SUSPENSION",
      iconName: "Activity"
    },
    {
      id: "vehicle-inspections",
      num: "08",
      title: "VEHICLE INSPECTIONS",
      description: "Vehicle health inspection and fault-assessment enquiries prior to journeys or repairs.",
      tag: "INSPECTION",
      iconName: "ShieldCheck"
    }
  ] as ServiceItem[],

  whyUs: [
    {
      num: "01",
      title: "CLEAR COMMUNICATION",
      description: "We explain the issue in straightforward language so you always understand what is needed.",
      iconName: "MessageSquare"
    },
    {
      num: "02",
      title: "PRACTICAL SERVICE",
      description: "We focus directly on the work your vehicle actually needs, without fluff or pressure.",
      iconName: "CheckCircle2"
    },
    {
      num: "03",
      title: "INDEPENDENT APPROACH",
      description: "A local, independent garage in Corby offering a personal, direct repair service.",
      iconName: "Building2"
    },
    {
      num: "04",
      title: "LOCAL TO CORBY",
      description: "Conveniently located at Unit 10, Brunel Road, easily accessible across Corby and surrounding areas.",
      iconName: "MapPin"
    }
  ] as WhyUsItem[],

  howItWorks: [
    {
      step: "01",
      title: "GET IN TOUCH",
      description: "Call 07522 574716 or send a WhatsApp message to tell us what is happening with your vehicle.",
      iconName: "PhoneCall"
    },
    {
      step: "02",
      title: "DISCUSS THE ISSUE",
      description: "Provide your vehicle make, model and registration, and explain the problem or service required.",
      iconName: "ClipboardList"
    },
    {
      step: "03",
      title: "VEHICLE SERVICE / REPAIR",
      description: "Bring your car to Unit 10 Brunel Road where the agreed work is carried out.",
      iconName: "Wrench"
    },
    {
      step: "04",
      title: "GET BACK ON THE ROAD",
      description: "Collect your vehicle and receive a clear breakdown of the work completed.",
      iconName: "CheckCircle"
    }
  ] as ProcessStepItem[],

  reviews: [
    {
      id: "rev-1",
      author: "Verified Google Customer",
      rating: 5,
      date: "Recent Google Review",
      comment: "PASTE VERIFIED GOOGLE REVIEW HERE — Great communication and straightforward service from the team at Beetle Garage.",
      isPlaceholder: true
    },
    {
      id: "rev-2",
      author: "Local Corby Motorist",
      rating: 5,
      date: "Recent Google Review",
      comment: "PASTE VERIFIED GOOGLE REVIEW HERE — Helpful mechanics, fair pricing, and got my car back on the road without hassle.",
      isPlaceholder: true
    },
    {
      id: "rev-3",
      author: "Corby Resident",
      rating: 5,
      date: "Recent Google Review",
      comment: "PASTE VERIFIED GOOGLE REVIEW HERE — Direct contact with the garage, friendly approach and reliable vehicle repair work.",
      isPlaceholder: true
    }
  ] as ReviewItem[],

  gallery: [
    {
      id: "gal-1",
      title: "Beetle Garage Premises",
      category: "Unit 10 Brunel Road, Corby",
      imageUrl: "/images/beetle-garage-unit10-corby.png",
      isRealLocation: true
    },
    {
      id: "gal-2",
      title: "Vehicle Engine Diagnostics",
      category: "Workshop Repairs",
      imageUrl: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&q=80&w=1200",
      isRealLocation: false
    },
    {
      id: "gal-3",
      title: "Under-Bonnet Inspection",
      category: "Servicing & Maintenance",
      imageUrl: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=1200",
      isRealLocation: false
    },
    {
      id: "gal-4",
      title: "Brake & Mechanical Work",
      category: "Mechanical Bay",
      imageUrl: "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&q=80&w=1200",
      isRealLocation: false
    }
  ] as GalleryItem[]
};
