export interface AuthContextType {
  token: string | null
  login: (jwtToken: string) => void
  logout: () => void
  isAuthenticated: boolean
  isLoading: boolean
}
