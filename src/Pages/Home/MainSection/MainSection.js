import React from 'react';
import { Suspense } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Camera from './Camera/Camera';
import image from '../../../images/sunset-5344024_1280.jpg'

const MainSection = () => {
    const client = new QueryClient({
        defaultOptions: {
            queries: {
                suspense: true,
            },
        },
    });
    return (
        <div>
            <img style={{width:"100%",height:"600px"}} src={image} alt=""></img>
            
            <QueryClientProvider client={client}>
                <Suspense fallback={<><div class="spinner-border text-info mt-4" role="status">
               </div> <div><span>Loading...</span></div>  </>}>
               <Camera></Camera>
             </Suspense>
</QueryClientProvider>
        </div>
    );
};

export default MainSection;