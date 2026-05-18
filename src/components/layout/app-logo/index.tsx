import { standalone_routes } from '@/components/shared';
import { useDevice } from '@deriv-com/ui';
import './app-logo.scss';

export const AppLogo = () => {
    const { isDesktop } = useDevice();

    if (!isDesktop) return null;
    return (
        <a className='app-header__logo ark-logo' href={standalone_routes.deriv_com} target='_blank' rel='noreferrer'>
            <svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <rect width='32' height='32' rx='6' fill='#0f4c81' />
                <path d='M8 24L16 8L24 24H8Z' fill='none' stroke='#f0a500' strokeWidth='2' strokeLinejoin='round' />
                <path d='M11 20H21' stroke='#f0a500' strokeWidth='2' strokeLinecap='round' />
                <circle cx='16' cy='14' r='2' fill='#f0a500' />
            </svg>
            <span className='ark-logo__text'>ArkTraders Hub</span>
        </a>
    );
};
