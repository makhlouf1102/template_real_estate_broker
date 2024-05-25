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
        <Select variant='unstyled' defaultValue={localActive} onChange={onSelectChange}>
            <option value='en'>English</option>
            <option value='fr'>Français</option>
        </Select>
    )
};

