import React from 'react';
import {createRoot} from 'react-dom/client';
import {createClient} from '@supabase/supabase-js';
import {App} from './app.js';
import './style.css';
const url=import.meta.env.VITE_SUPABASE_URL, key=import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;
let client=null, configError='';
if(url && key){try{if(!/^sb_publishable_/.test(key))throw Error('Use a Supabase publishable key only.');client=createClient(url,key);}catch(e){configError=e.message;}}
createRoot(document.getElementById('root')).render(React.createElement(App,{client,configError,portrait:import.meta.env.BASE_URL+'assets/portrait.webp'}));
