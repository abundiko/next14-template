
import { cookies } from 'next/headers'
import { appCookies } from '.';
import { debugLog } from '@/functions/debug';

export const ServerApiRequest = {
    get(url: string, init: RequestInit = {}) {
        const {get, has} = cookies();
        if(!has(appCookies.accessToken)) return null;
        const accessToken = get(appCookies.accessToken)!.value ?? '';
        // const accessToken = '';
        const {headers, ...others} = init;
        
        return fetch(url, {
            ...others,
            headers: {
                ...headers,
                'x-access-token': accessToken
            },
        });
    },
    post(url: string,body:any, init: RequestInit = {}) {
        debugLog(body);
        const {get, has} = cookies();
        if(!has(appCookies.accessToken)) return null;
        const accessToken = get(appCookies.accessToken)!.value ?? '';
        // const accessToken = '';
        const {headers, ...others} = init;
        
        return fetch(url, {
            ...others,
            method: 'POST',
            headers: {
                'x-access-token': accessToken,
                'Content-Type': 'application/json',
                ...headers,
            },
            body: JSON.stringify(body),
        });
    },
    postFormdata(url: string,body:any, init: RequestInit = {}) {
        debugLog(body);
        const {get, has} = cookies();
        if(!has(appCookies.accessToken)) return null;
        const accessToken = get(appCookies.accessToken)!.value ?? '';
        // const accessToken = '';
        const {headers, ...others} = init;
        
        return fetch(url, {
            ...others,
            method: 'POST',
            headers: {
                'x-access-token': accessToken,
                'Content-Type': 'multipart/form-data',
                ...headers,
            },
            body: JSON.stringify(body),
        });
    },
    patch(url: string,body:any, init: RequestInit = {}) {
        debugLog(body);
        const {get, has} = cookies();
        if(!has(appCookies.accessToken)) return null;
        const accessToken = get(appCookies.accessToken)!.value ?? '';
        // const accessToken = '';
        const {headers, ...others} = init;
        
        return fetch(url, {
            ...others,
            method: 'PATCH',
            headers: {
                ...headers,
                'x-access-token': accessToken,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body),
        });
    },
    delete(url: string,body:any, init: RequestInit = {}) {
        debugLog(body);
        const {get, has} = cookies();
        if(!has(appCookies.accessToken)) return null;
        const accessToken = get(appCookies.accessToken)!.value ?? '';
        // const accessToken = '';
        const {headers, ...others} = init;
        
        return fetch(url, {
            ...others,
            method: 'DELETE',
            headers: {
                ...headers,
                'x-access-token': accessToken,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body),
        });
    },
}