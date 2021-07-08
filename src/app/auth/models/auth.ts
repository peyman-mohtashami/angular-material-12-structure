export interface AuthResponse {
  access_token: string;
  expires_in: number;
  grant_type: string;
  iat: number;
  iss: string;
  jti: string;
  refresh_token: string;
  roles: string[];
  scope: string;
  sources: string[];
  sub: string;
  token_type: string;
}
