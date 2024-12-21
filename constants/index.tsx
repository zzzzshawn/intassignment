import { CodeXml, House, KeyRound, LogOut, Phone, Settings } from "lucide-react";
import Image from "next/image";



export const SideBarLinks = [
    {
        name: "Repositories",
        Icon: <House className="size-[24px] "/>
    }, 
    {
        name: "AI Code Review",
        Icon: <CodeXml className="size-[24px] "/>
    },
    {
        name: "Cloud Security",
        Icon: <Image src="/assets/cloud-security.svg" alt="Cloud Security" width={24} height={24} className="size-[24px] "/>
    },
    {
        name: "How to Use",
        Icon: <Image src="/assets/book.svg" alt="How to Use" width={24} height={24} className="size-[18px]  p-0.5"/>
    },
    {
        name: "Settings",
        Icon: <Settings className="size-[24px] "/>
    }
]

export const SideBarBottomLinks = [
    {
        name: "Support",
        Icon: <Phone className="size-[24px] "/>,
        href: "/"
    },
    {
        name: "Logout",
        Icon: <LogOut className="size-[24px] " />,
        href: "/auth/sign-up"
    }
]


export const Repos = [
    {
        name: "design-system",
        lang: "React",
        tag: "Public",
        size: "7320",
        updated: "1"
    },
    {
        name: "codeant-ci-app",
        lang: "JavaScript",
        tag: "Private",
        size: "5871",
        updated: "2"
    },
    {
        name: "analytics-dashboard",
        lang: "Python",
        tag: "Private",
        size: "4521",
        updated: "5"
    },
    {
        name: "mobile-app",
        lang: "Swift",
        tag: "Public",
        size: "3096",
        updated: "3"
    },
    {
        name: "ecommerce-platform",
        lang: "Java",
        tag: "Private",
        size: "6210",
        updated: "6"
    },
    {
        name: "blog-website",
        lang: "HTML/CSS",
        tag: "Public",
        size: "1876",
        updated: "4"
    },
    {
        name: "social-network",
        lang: "PHP",
        tag: "Private",
        size: "5432",
        updated: "7"
    }
]


export const providers = [
    {
        name: "Github",
        Icon: <Image src="/assets/github.svg" alt="Cloud Security" width={24} height={24} className="size-[24px] "/>

    },
    {
        name: "Bitbucket",
        Icon: <Image src="/assets/bitbucket.svg" alt="Cloud Security" width={24} height={24} className="size-[24px] "/>
    },
    {
        name: "Azure Devops",
        Icon: <Image src="/assets/azure.svg" alt="Cloud Security" width={24} height={24} className="size-[24px] "/>

    }, 
    {
        name: "GitLab",
        Icon: <Image src="/assets/gitlab.svg" alt="Cloud Security" width={24} height={24} className="size-[24px] "/>
    }
]


export const self_hosted = [
    {
        name: "GitLab",
        Icon: <Image src="/assets/gitlab.svg" alt="Cloud Security" width={24} height={24} className="size-[24px] "/>
    },
    {
        name: "SSO",
        Icon: <KeyRound className="size-[24px] text-black"/>
    }
]