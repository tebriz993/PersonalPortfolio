export type Language = 'az' | 'tr' | 'en';

export interface Translations {
  // Navigation
  nav: {
    about: string;
    experience: string;
    skills: string;
    projects: string;
    contact: string;
  };
  
  // Hero Section
  hero: {
    greeting: string;
    name: string;
    title: string;
    description: string;
    downloadCV: string;
    contactMe: string;
  };
  
  // About Section
  about: {
    title: string;
    description1: string;
    description2: string;
    yearsExperience: string;
    projectsCompleted: string;
    technologiesUsed: string;
    satisfiedClients: string;
  };
  
  // Experience Section
  experience: {
    title: string;
    positions: {
      fullStackDeveloper: string;
      frontEndDeveloper: string;
      backEndDeveloper: string;
    };
    companies: {
      freelance: string;
      myMentorship: string;
      softwareVillage: string;
    };
    descriptions: {
      freelanceDesc: string;
      myMentorshipDesc: string;
      softwareVillageDesc: string;
    };
  };
  
  // Skills Section
  skills: {
    title: string;
    categories: {
      frontend: string;
      backend: string;
      database: string;
      tools: string;
    };
  };
  
  // Projects Section
  projects: {
    title: string;
    viewProject: string;
    technologies: string;
    loading: string;
    error: string;
  };
  
  // Education Section
  education: {
    title: string;
    educationTab: string;
    achievementsTab: string;
    institutions: {
      uniser: string;
      myMentorship: string;
      softwareVillage: string;
      bakuEngineering: string;
    };
    degrees: {
      advancedBackend: string;
      advancedFrontend: string;
      backend: string;
      computerEngineering: string;
    };
    descriptions: {
      csharpNet: string;
      htmlCssReact: string;
      csharpMvc: string;
      bachelorEn: string;
    };
    achievements: {
      aiResearch: string;
      spaceResearch: string;
      blockchainResearch: string;
      algorithmsDS: string;
      csharpProg: string;
      dataStructure: string;
      javascript: string;
      climateHackathon: string;
      mitPython: string;
      cppProg: string;
      junctionHackathon: string;
    };
    organizations: {
      britishCongress: string;
      iacFederation: string;
      scopus: string;
      stanford: string;
      coursera: string;
      progAcademy: string;
      cisco: string;
      youthFund: string;
      mit: string;
      junctionEurope: string;
    };
    types: {
      certificate: string;
      award: string;
      publication: string;
    };
    status: {
      completed: string;
      pending: string;
      secondPlace: string;
      participated: string;
    };
  };
  
  // Contact Section
  contact: {
    title: string;
    subtitle: string;
    description: string;
    form: {
      name: string;
      email: string;
      subject: string;
      message: string;
      send: string;
      sending: string;
    };
    success: {
      title: string;
      message: string;
    };
    error: {
      title: string;
      message: string;
    };
  };
  
  // Common
  common: {
    scholarship: string;
    present: string;
    download: string;
  };
}

export const translations: Record<Language, Translations> = {
  az: {
    nav: {
      about: "Haqqında",
      experience: "Təcrübə",
      skills: "Bacarıqlar",
      projects: "Layihələr",
      contact: "Əlaqə"
    },
    hero: {
      greeting: "Salam, mən",
      name: "Təbriz Lətifovam",
      title: "Full Stack Proqram Tərtibatçısı",
      description: "Modern veb tətbiqlər və innovativ həllər yaratmağa həvəsli proqramçı. C#, React və müasir texnologiyalarla işləyirəm.",
      downloadCV: "CV Yüklə",
      contactMe: "Əlaqə Saxla"
    },
    about: {
      title: "Mənim Haqqımda",
      description1: "Mən C#, .NET, React və müasir veb texnologiyalarında təcrübəli Full Stack proqramçısıyam. Həm front-end, həm də back-end sahələrində dərin biliklərə malikəm.",
      description2: "Məqsədim müştəri ehtiyaclarını anlamaq və onlar üçün innovativ, keyfiyyətli həllər yaratmaqdır. Komanda işində və müstəqil işdə eyni dərəcədə uğurluyam.",
      yearsExperience: "İl Təcrübə",
      projectsCompleted: "Tamamlanmış Layihə",
      technologiesUsed: "Texnologiya",
      satisfiedClients: "Məmnun Müştəri"
    },
    experience: {
      title: "İş Təcrübəm",
      positions: {
        fullStackDeveloper: "Full Stack Proqramçı",
        frontEndDeveloper: "Front-end Proqramçı",
        backEndDeveloper: "Back-end Proqramçı"
      },
      companies: {
        freelance: "Sərbəst İş",
        myMentorship: "MyMentorship and Development Agency",
        softwareVillage: "Software Village"
      },
      descriptions: {
        freelanceDesc: "Müxtəlif müştərilər üçün full-stack veb tətbiqlər və API-lər hazırlayıram",
        myMentorshipDesc: "React, TypeScript və müasir front-end texnologiyaları ilə işləyirəm",
        softwareVillageDesc: "C#, .NET Core və mikroservis arxitekturasında işləmişəm"
      }
    },
    skills: {
      title: "Texniki Bacarıqlarım",
      categories: {
        frontend: "Front-end",
        backend: "Back-end",
        database: "Verilənlər Bazası",
        tools: "Alətlər"
      }
    },
    projects: {
      title: "Layihələrim",
      viewProject: "Layihəyə Bax",
      technologies: "Texnologiyalar",
      loading: "Layihələr yüklənir...",
      error: "Layihələr yüklənə bilmədi"
    },
    education: {
      title: "Təhsil və Sertifikatlar",
      educationTab: "Təhsil",
      achievementsTab: "Sertifikatlar və Nailiyyətlər",
      institutions: {
        uniser: "Uniser IT Academy",
        myMentorship: "MyMentorship and Development Agency",
        softwareVillage: "Software Village",
        bakuEngineering: "Bakı Mühəndislik Universiteti"
      },
      degrees: {
        advancedBackend: "Qabaqcıl Back-end İnkişafı",
        advancedFrontend: "Qabaqcıl Front-end İnkişafı",
        backend: "Back-end İnkişafı",
        computerEngineering: "Kompüter Mühəndisliyi (EN)"
      },
      descriptions: {
        csharpNet: "C#, .NET və Mikroservis Arxitekturası",
        htmlCssReact: "HTML, CSS, JS, TS, React.js",
        csharpMvc: "C#, .NET, MVC, MVVM, API",
        bachelorEn: "Bakalavr Dərəcəsi (İngilis dilində)"
      },
      achievements: {
        aiResearch: "Nəşr olunan Tədqiqat",
        spaceResearch: "Nəşr olunan Tədqiqat",
        blockchainResearch: "Nəşr olunan Tədqiqat",
        algorithmsDS: "Alqoritmlər və Verilənlər Strukturları",
        csharpProg: "C# Proqramlaşdırma",
        dataStructure: "Verilənlər Strukturu, OOP və Alqoritmlər",
        javascript: "JavaScript",
        climateHackathon: "İqlim Dəyişikliyi Hackathon",
        mitPython: "Python ilə Kompüter Elmləri və Proqramlaşdırma",
        cppProg: "C++ Proqramlaşdırma",
        junctionHackathon: "Junction X Hackathon"
      },
      organizations: {
        britishCongress: "Beynəlxalq Britaniya Konqresi - London, Böyük Britaniya",
        iacFederation: "IAC Astronavtika Federasiyası Konfransı 2025 - Sidney, Avstraliya",
        scopus: "SCOPUS",
        stanford: "Stanford Universiteti (Coursera)",
        coursera: "Coursera",
        progAcademy: "Proqramlaşdırma Akademiyası",
        cisco: "CISCO Şəbəkə Akademiyası",
        youthFund: "Azərbaycan Respublikası Gənclər Fondu",
        mit: "Massaçusets Texnologiya İnstitutu (EDX)",
        junctionEurope: "Avropanın ən böyük hackathon-u"
      },
      types: {
        certificate: "sertifikat",
        award: "mükafat",
        publication: "nəşr"
      },
      status: {
        completed: "Tamamlandı",
        pending: "gözləyir",
        secondPlace: "2-ci yer qalibi",
        participated: "İştirak etdi"
      }
    },
    contact: {
      title: "Əlaqə Saxlayın",
      subtitle: "Gəlin Birlikdə İşləyək",
      description: "Mən həmişə yeni imkanları, maraqlı layihələri və innovativ həlləri müzakirə etməkdə maraqlıyam. Sualınız varsa və ya sadəcə salam demək istəyirsinizsə, çekinmədən yazın — 12 saat ərzində cavab alacaqsınız. Gəlin birlikdə möhtəşəm bir şey yaradaq!",
      form: {
        name: "Adınız",
        email: "E-poçt ünvanınız",
        subject: "Mövzu",
        message: "Mesajınız",
        send: "Mesaj Göndər",
        sending: "Göndərilir..."
      },
      success: {
        title: "Mesaj Göndərildi!",
        message: "Mesajınız üçün təşəkkür edirəm. Tezliklə sizə cavab verəcəyəm."
      },
      error: {
        title: "Xəta!",
        message: "Nəsə səhv oldu. Məlumatlarınızı yoxlayın və ya sonra yenidən cəhd edin."
      }
    },
    common: {
      scholarship: "100% Təqaüd",
      present: "Hazırda",
      download: "Yüklə"
    }
  },
  
  tr: {
    nav: {
      about: "Hakkında",
      experience: "Deneyim",
      skills: "Yetenekler",
      projects: "Projeler",
      contact: "İletişim"
    },
    hero: {
      greeting: "Merhaba, ben",
      name: "Tabriz Latifov",
      title: "Full Stack Yazılım Geliştiricisi",
      description: "Modern web uygulamaları ve yenilikçi çözümler geliştirmeye tutkulu bir yazılımcı. C#, React ve modern teknolojilerle çalışıyorum.",
      downloadCV: "CV İndir",
      contactMe: "İletişime Geç"
    },
    about: {
      title: "Hakkımda",
      description1: "C#, .NET, React ve modern web teknolojilerinde deneyimli bir Full Stack yazılımcısıyım. Hem front-end hem de back-end alanlarında derin bilgiye sahibim.",
      description2: "Amacım müşteri ihtiyaçlarını anlamak ve onlar için yenilikçi, kaliteli çözümler üretmektir. Ekip çalışmasında ve bağımsız çalışmada eşit derecede başarılıyım.",
      yearsExperience: "Yıl Deneyim",
      projectsCompleted: "Tamamlanan Proje",
      technologiesUsed: "Teknoloji",
      satisfiedClients: "Memnun Müşteri"
    },
    experience: {
      title: "İş Deneyimim",
      positions: {
        fullStackDeveloper: "Full Stack Geliştirici",
        frontEndDeveloper: "Front-end Geliştirici",
        backEndDeveloper: "Back-end Geliştirici"
      },
      companies: {
        freelance: "Serbest Çalışma",
        myMentorship: "MyMentorship and Development Agency",
        softwareVillage: "Software Village"
      },
      descriptions: {
        freelanceDesc: "Çeşitli müşteriler için full-stack web uygulamaları ve API'ler geliştiriyorum",
        myMentorshipDesc: "React, TypeScript ve modern front-end teknolojileriyle çalışıyorum",
        softwareVillageDesc: "C#, .NET Core ve microservice mimarisinde çalıştım"
      }
    },
    skills: {
      title: "Teknik Yeteneklerim",
      categories: {
        frontend: "Front-end",
        backend: "Back-end",
        database: "Veritabanı",
        tools: "Araçlar"
      }
    },
    projects: {
      title: "Projelerim",
      viewProject: "Projeyi Görüntüle",
      technologies: "Teknolojiler",
      loading: "Projeler yükleniyor...",
      error: "Projeler yüklenemedi"
    },
    education: {
      title: "Eğitim ve Sertifikalar",
      educationTab: "Eğitim",
      achievementsTab: "Sertifikalar ve Başarılar",
      institutions: {
        uniser: "Uniser IT Academy",
        myMentorship: "MyMentorship and Development Agency",
        softwareVillage: "Software Village",
        bakuEngineering: "Bakü Mühendislik Üniversitesi"
      },
      degrees: {
        advancedBackend: "İleri Düzey Back-end Geliştirme",
        advancedFrontend: "İleri Düzey Front-end Geliştirme",
        backend: "Back-end Geliştirme",
        computerEngineering: "Bilgisayar Mühendisliği (EN)"
      },
      descriptions: {
        csharpNet: "C#, .NET ve Microservice Mimarisi",
        htmlCssReact: "HTML, CSS, JS, TS, React.js",
        csharpMvc: "C#, .NET, MVC, MVVM, API",
        bachelorEn: "Lisans Derecesi (İngilizce)"
      },
      achievements: {
        aiResearch: "Yayınlanan Araştırma",
        spaceResearch: "Yayınlanan Araştırma",
        blockchainResearch: "Yayınlanan Araştırma",
        algorithmsDS: "Algoritmalar ve Veri Yapıları",
        csharpProg: "C# Programlama",
        dataStructure: "Veri Yapısı, OOP ve Algoritmalar",
        javascript: "JavaScript",
        climateHackathon: "İklim Değişikliği Hackathon",
        mitPython: "Python ile Bilgisayar Bilimleri ve Programlama",
        cppProg: "C++ Programlama",
        junctionHackathon: "Junction X Hackathon"
      },
      organizations: {
        britishCongress: "Uluslararası İngiliz Kongresi - Londra, İngiltere",
        iacFederation: "IAC Astronotik Federasyonu Konferansı 2025 - Sidney, Avustralya",
        scopus: "SCOPUS",
        stanford: "Stanford Üniversitesi (Coursera)",
        coursera: "Coursera",
        progAcademy: "Programlama Akademisi",
        cisco: "CISCO Ağ Akademisi",
        youthFund: "Azerbaycan Cumhuriyeti Gençlik Fonu",
        mit: "Massachusetts Teknoloji Enstitüsü (EDX)",
        junctionEurope: "Avrupa'nın en büyük hackathon'u"
      },
      types: {
        certificate: "sertifika",
        award: "ödül",
        publication: "yayın"
      },
      status: {
        completed: "Tamamlandı",
        pending: "beklemede",
        secondPlace: "2. yer kazananı",
        participated: "Katıldı"
      }
    },
    contact: {
      title: "İletişime Geçin",
      subtitle: "Birlikte Çalışalım",
      description: "Her zaman yeni fırsatları, ilginç projeleri ve yenilikçi çözümleri tartışmakla ilgileniyorum. Bir sorunuz varsa veya sadece merhaba demek istiyorsanız, çekinmeden yazın — 12 saat içinde yanıt alacaksınız. Birlikte harika bir şey yaratalım!",
      form: {
        name: "Adınız",
        email: "E-posta adresiniz",
        subject: "Konu",
        message: "Mesajınız",
        send: "Mesaj Gönder",
        sending: "Gönderiliyor..."
      },
      success: {
        title: "Mesaj Gönderildi!",
        message: "Mesajınız için teşekkür ederim. Yakında size geri döneceğim."
      },
      error: {
        title: "Hata!",
        message: "Bir şeyler yanlış gitti. Bilgilerinizi kontrol edin veya daha sonra tekrar deneyin."
      }
    },
    common: {
      scholarship: "%100 Burs",
      present: "Şu anda",
      download: "İndir"
    }
  },
  
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact"
    },
    hero: {
      greeting: "Hello, I'm",
      name: "Tabriz Latifov",
      title: "Full Stack Software Engineer",
      description: "A passionate developer focused on creating modern web applications and innovative solutions. I work with C#, React, and cutting-edge technologies.",
      downloadCV: "Download CV",
      contactMe: "Contact Me"
    },
    about: {
      title: "About Me",
      description1: "I'm an experienced Full Stack developer with expertise in C#, .NET, React, and modern web technologies. I have deep knowledge in both front-end and back-end development.",
      description2: "My goal is to understand client needs and create innovative, high-quality solutions for them. I excel equally in teamwork and independent work.",
      yearsExperience: "Years Experience",
      projectsCompleted: "Projects Completed",
      technologiesUsed: "Technologies",
      satisfiedClients: "Satisfied Clients"
    },
    experience: {
      title: "Work Experience",
      positions: {
        fullStackDeveloper: "Full Stack Developer",
        frontEndDeveloper: "Front-end Developer",
        backEndDeveloper: "Back-end Developer"
      },
      companies: {
        freelance: "Freelance",
        myMentorship: "MyMentorship and Development Agency",
        softwareVillage: "Software Village"
      },
      descriptions: {
        freelanceDesc: "Developing full-stack web applications and APIs for various clients",
        myMentorshipDesc: "Working with React, TypeScript and modern front-end technologies",
        softwareVillageDesc: "Worked with C#, .NET Core and microservice architecture"
      }
    },
    skills: {
      title: "Technical Skills",
      categories: {
        frontend: "Front-end",
        backend: "Back-end",
        database: "Database",
        tools: "Tools"
      }
    },
    projects: {
      title: "My Projects",
      viewProject: "View Project",
      technologies: "Technologies",
      loading: "Loading projects...",
      error: "Failed to load projects"
    },
    education: {
      title: "Education & Certifications",
      educationTab: "Education",
      achievementsTab: "Certifications & Achievements",
      institutions: {
        uniser: "Uniser IT Academy",
        myMentorship: "MyMentorship and Development Agency",
        softwareVillage: "Software Village",
        bakuEngineering: "Baku Engineering University"
      },
      degrees: {
        advancedBackend: "Advanced Back-end Development",
        advancedFrontend: "Advanced Front-end Development",
        backend: "Back-end Development",
        computerEngineering: "Computer Engineering (EN)"
      },
      descriptions: {
        csharpNet: "C#, .NET and Microservice Architecture",
        htmlCssReact: "HTML, CSS, JS, TS, React.js",
        csharpMvc: "C#, .NET, MVC, MVVM, API",
        bachelorEn: "Bachelor's Degree (English)"
      },
      achievements: {
        aiResearch: "Published Research",
        spaceResearch: "Published Research",
        blockchainResearch: "Published Research",
        algorithmsDS: "Algorithms & Data Structures",
        csharpProg: "C# Programming",
        dataStructure: "Data Structure, OOP and Algorithms",
        javascript: "JavaScript",
        climateHackathon: "Climate Change Hackathon",
        mitPython: "Computer Science and Programming using Python",
        cppProg: "C++ Programming",
        junctionHackathon: "Junction X Hackathon"
      },
      organizations: {
        britishCongress: "International British Congress - London, UK",
        iacFederation: "IAC Astronautical Federation Conference 2025 - Sydney, Australia",
        scopus: "SCOPUS",
        stanford: "Stanford University (Coursera)",
        coursera: "Coursera",
        progAcademy: "Programming Academy",
        cisco: "CISCO Networking Academy",
        youthFund: "Azerbaijan Republic Youth Fund",
        mit: "Massachusetts Institute of Technology (EDX)",
        junctionEurope: "Europe's largest hackathon"
      },
      types: {
        certificate: "certificate",
        award: "award",
        publication: "publication"
      },
      status: {
        completed: "Completed",
        pending: "pending",
        secondPlace: "2nd Place Winner",
        participated: "Participated"
      }
    },
    contact: {
      title: "Get In Touch",
      subtitle: "Let's Work Together",
      description: "I'm always interested in discussing new opportunities, interesting projects, and innovative solutions. Whether you have a question or just want to say hi, feel free to reach out — you'll receive a response within 12 hours. Let's create something amazing together!",
      form: {
        name: "Your Name",
        email: "Your Email",
        subject: "Subject",
        message: "Your Message",
        send: "Send Message",
        sending: "Sending..."
      },
      success: {
        title: "Message Sent!",
        message: "Thank you for your message. I'll get back to you soon."
      },
      error: {
        title: "Error!",
        message: "Something went wrong. Please check your details or try again later."
      }
    },
    common: {
      scholarship: "100% Scholarship",
      present: "Present",
      download: "Download"
    }
  }
};