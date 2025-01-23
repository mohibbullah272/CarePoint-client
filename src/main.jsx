import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router/router'
import AuthProvider from './AuthProvider/AuthProvider'
import  { Toaster } from 'react-hot-toast';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient()
createRoot(document.getElementById('root')).render(
  <StrictMode>
<MantineProvider>
<QueryClientProvider client={queryClient}>
<AuthProvider>
<RouterProvider router={router}></RouterProvider>
<Toaster  position='top-right' />
</AuthProvider>
</QueryClientProvider>
</MantineProvider>
  </StrictMode>,
)
