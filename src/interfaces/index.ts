export interface UserInfo {
    access_token:string,
    name:string
}
interface UserDetails {
    name: string;
    email: string;
    image: string;
    phone_no: string;
    address: string;
    role: string;
    exp: string;
    projects: string;
}

interface About {
    title: string;
    description: string;
}

interface EduExp {
    start_date: number;
    end_date: number;
    role: string;
    company: string;
}

interface Service {
    title: string;
    desc: string;
    project_count: number;
    icon: string;
}

interface Portfolio {
    name: string;
    class: string;
    image: string[];
    tech_used: string[];
}

interface Skill {
    name: string;
    percent: number;
    icon: string;
}

export interface DataStructure {
    user_details: UserDetails;
    about: About;
    edu_exp: EduExp;
    services: Service;
    portfolio: Portfolio;
    skills: Skill;
}