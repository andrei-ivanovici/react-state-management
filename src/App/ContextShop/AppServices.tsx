import React, {createContext, ReactNode, useContext} from 'react';
import {DataService} from "../data.service";

export interface Services {
    api: DataService;
}

const ctx = createContext<Services>(null);

export interface AppServicesProps {
    services: Services;
    children: ReactNode;
}

export function useAppServices() {
    return useContext(ctx);
}

export function AppServices({services, children}: AppServicesProps) {
    return <ctx.Provider value={services}>
        {children}
    </ctx.Provider>;
}
