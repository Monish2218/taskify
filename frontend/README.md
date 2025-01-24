# Frontend Development Planning

## Frontend Setup:
Ensure the frontend (built with Vite, React, and shadcn) is ready.
Configure Axios or Fetch for API calls.

## Frontend Features:
- Implement Authentication:
  - Login and Registration pages.
- Build Projects UI:
  - A dashboard showing the user's projects.
  - Forms for creating and editing projects.
- Build Tasks UI:
  - List tasks under each project.
  - Forms for creating, editing, and deleting tasks.
- Ensure everything is responsive and styled using shadcn components.

## Steps
- Set up the frontend environment with Vite, React, and shadcn. ✅
- Implement authentication
  - Build Login and Register pages ✅
  - Connect frontend to backend using Axios or Fetch for API calls. ✅ (used fetch api)
- Set up full navigation and user flow by connecting different components.
  - Build Top Navbar ✅ , Make it responsive and polish it
  - if the user is not signed in (he does not have a valid token stored in localstorage) then he should see the landing home page else (he has a valid token stored in localstorage) he should be redirected to the dashboard page fetching the user details and setting up the auth context. ✅
- Build the projects UI, including a dashboard and forms for creating and editing projects. ✅ , Polish it
- Build the tasks UI, including a list of tasks and forms for creating, editing, and deleting tasks. ✅ Polish it
- Ensure the application is responsive and styled using shadcn components. ✅
- Test the application thoroughly to ensure all features are working as expected.
- Deploy the application to a production environment.


## Key Points / Notes

### AI Tools Recommendations
- **ChatGPT Recommendations** -> [Chat Link](https://chatgpt.com/c/8d2294b7-af8a-48d6-a6ce-fb2e5560608c)
  - Use Recoil for State management
  - The login endpoint should return token and user data in the response from backend
- **Claude Recommendations** -> [Chat Link](https://claude.ai/chat/135644b6-d543-4855-a5c1-2d3c6613001b)
  - Use React Query
  - Use the following folder structure
    ```
    src/
    ├── components/
    │   ├── auth/
    │   │   ├── LoginForm.tsx
    │   │   └── RegisterForm.tsx
    │   ├── dashboard/
    │   │   ├── ProjectList.tsx
    │   │   └── TaskBoard.tsx
    │   └── ui/  # shadcn components
    ├── hooks/
    │   └── useAuth.ts
    ├── types/
    │   └── index.ts
    ├── services/
    │   ├── api.ts
    │   └── auth.ts
    └── App.tsx
    ```
  - Authentication Setup
    ```
    // services/auth.ts
    interface AuthResponse {
      token: string;
      user: User;
    }

    export const authService = {
      async login(email: string, password: string): Promise<AuthResponse> {
        const response = await api.post('/auth/login', { email, password });
        return response.data;
      },

      async register(userData: RegisterData): Promise<AuthResponse> {
        const response = await api.post('/auth/register', userData);
        return response.data;
      }
    };
    ```
  - API Client Setup
    ```
    // services/api.ts
    import axios from 'axios';

    const api = axios.create({
      baseURL: import.meta.env.VITE_API_URL,
    });

    api.interceptors.request.use((config) => {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });
    ```
  - Authentication Hook
    ```
    // hooks/useAuth.ts
    import { useQuery, useMutation } from '@tanstack/react-query';
    import { authService } from '../services/auth';

    export function useAuth() {
      const login = useMutation({
        mutationFn: authService.login,
        onSuccess: (data) => {
          localStorage.setItem('token', data.token);
        },
      });

      const logout = () => {
        localStorage.removeItem('token');
      };

      return { login, logout };
    }
    ```
  - Other recommendations for making it Versatile for Both Individual Users and Organizations. View them in the chat using the link provided above.
- **V0.dev Recommendations**
  - Use Context API for state management

### Decisions
- Use Recoil for state management
- Use Axios for API requests
- Use React Query for data fetching and caching
- Use Context API for state management
- Use a library like `react-hook-form` for form handling
- Use a library like `react-router-dom` for routing