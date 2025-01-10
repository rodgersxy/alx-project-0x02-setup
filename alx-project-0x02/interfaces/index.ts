export interface Example {
    id: number;
    name: string;
}

export interface CardProps {
    title: string;
    content: string;
}

export interface ButtonProps {
    size: 'small' | 'medium' | 'large';
    shape: 'rounded-sm' | 'rounded-md' | 'rounded-full';
    onClick ?: () => void;
    children: React.ReactNode;
}

export interface PostProps {
    id: number;
    title: string;
    content: string;
    userId: number;
  }
  
  export interface UserProps {
    id: number;
    name: string;
    email: string;
    address: {
      street: string;
      city: string;
      zipcode: string;
    };
  }
  