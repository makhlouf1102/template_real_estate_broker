'use client'

import { Select } from '@chakra-ui/react'
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';

export const LocalSwitcherDesktop = () => {
    const [isPending, startTransition] = useTransition();
    const router = useRouter();
    const localActive = useLocale();

    const onSelectChange = (e) => {

        const nextLocale = e.target.value;

        startTransition(() => {
            router.replace(`/${nextLocale}`)
        })

    }

    return (
        <>
            <select defaultValue={localActive} onChange={onSelectChange} id="language" class="h-1 border cursor-pointer border-gray-300 text-gray-600 text-base rounded-lg block w-1/4 py-2.5 px-4 focus:outline-none">
                <option value='en'>English</option>
                <option value='fr'>Français</option>
            </select>

        </>
    )
};

