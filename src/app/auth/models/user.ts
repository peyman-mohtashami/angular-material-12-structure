export interface User {
  aud?: string;
  sub?: string;
  sources?: string;
  grant_type?: string;
  user_name?: string;
  roles?: string[];
  scope?: string[];
  iss?: string;
  exp?: number;
  iat?: number;
  authorities?: string[];
  client_id?: string;
  id?: string; // TODO _id
  email?: string;
  profile?: {
    name?: string;
    thumbUrl?: string;
  };
  // pictureUrl?: string;
  emailVerified?: boolean;
  // role?: string; // TODO enum
  createdAt?: string; // TODO Date
  updatedAt?: string; // TODO date
  username?: string;
  name?: string;
}

