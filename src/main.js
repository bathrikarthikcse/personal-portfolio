import React from 'react';
import { createRoot } from 'react-dom/client';
import { createClient } from '@supabase/supabase-js';
import App from './app.js';
import './style.css';
import portrait from './assets/founder.webp';
const url=import.meta.env.VITE_SUPABASE_URL;
const key=import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;
let client=null, configError='';
try { if(url&&key) client=createClient(url,key,{auth:{persistSession:false,autoRefreshToken:true,detectSessionInUrl:false}}); else if(url||key) configError='Incomplete Supabase configuration.'; } catch(e) { configError='Supabase configuration is invalid.'; }
createRoot(document.getElementById('root')).render(React.createElement(App,{client,portrait,configError}));
