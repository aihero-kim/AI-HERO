import { Avatar, AvatarFallback, AvatarImage } from './avatar';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from './card';
import { cn } from '@/lib/utils';
import { gsap } from 'gsap';
import * as React from 'react';
import { useRef, useEffect } from 'react';

export interface SocialLink {
    id: string;
    url: string;
    icon: React.ReactNode;
    label: string;
}

export interface ProfileCardContentProps
    extends React.HTMLAttributes<HTMLDivElement> {
    name: string;
    location: string;
    bio: string;
    avatarSrc: string;
    avatarFallback: React.ReactNode;
    variant?: 'default' | 'on-accent';
    socials?: SocialLink[];
    showAvatar?: boolean;
    titleStyle?: React.CSSProperties;
    cardStyle?: React.CSSProperties;
    descriptionClassName?: string;
    bioClassName?: string;
    footerClassName?: string;
}

export const ProfileCardContent = React.forwardRef<
    HTMLDivElement,
    ProfileCardContentProps
>(
    (
        {
            className,
            name,
            location,
            bio,
            avatarSrc,
            avatarFallback,
            variant = 'default',
            socials = [],
            showAvatar = true,
            titleStyle,
            cardStyle,
            descriptionClassName,
            bioClassName,
            footerClassName,
            ...props
        },
        ref
    ) => {
        const isOnAccent = variant === 'on-accent';

        return (
            <Card
                ref={ref}
                className={cn(
                    'w-full h-full p-8 flex flex-col rounded-3xl border-0 shadow-none',
                    isOnAccent
                        ? 'text-[var(--on-accent-foreground)]'
                        : 'bg-card text-card-foreground',
                    className
                )}
                style={cardStyle}
                {...props}
            >
                <CardHeader className='p-0'>
                    <div className={cn('flex-shrink-0', !showAvatar && 'invisible')}>
                        <Avatar
                            className='h-16 w-16 ring-2 ring-black ring-offset-0'
                        >
                            <AvatarImage src={avatarSrc} />
                            <AvatarFallback>{avatarFallback}</AvatarFallback>
                        </Avatar>
                    </div>
                    <CardDescription
                        className={cn(
                            'pt-6 text-left font-display font-bold uppercase tracking-widest text-[10px]',
                            !isOnAccent && 'text-primary',
                            descriptionClassName
                        )}
                        style={
                            isOnAccent ? { color: 'var(--on-accent-muted-foreground)' } : {}
                        }
                    >
                        {location}
                    </CardDescription>
                    <CardTitle
                        className={cn('text-2xl text-left font-display font-black')}
                        style={{
                            ...(isOnAccent ? { color: 'var(--on-accent-foreground)' } : {}),
                            ...titleStyle,
                        }}
                    >
                        {name}
                    </CardTitle>
                </CardHeader>

                <CardContent className='p-0 flex-grow mt-4'>
                    <p
                        className={cn(
                            'text-sm leading-relaxed text-left opacity-70',
                            !isOnAccent && 'text-gray-400',
                            bioClassName
                        )}
                        style={isOnAccent ? { opacity: 0.9 } : {}}
                    >
                        {bio}
                    </p>
                </CardContent>

                {socials.length > 0 && (
                    <CardFooter className={cn('p-0 mt-6', footerClassName)}>
                        <div
                            className={cn(
                                'flex items-center gap-4',
                                !isOnAccent && 'text-muted-foreground'
                            )}
                            style={
                                isOnAccent ? { color: 'var(--on-accent-muted-foreground)' } : {}
                            }
                        >
                            {socials.map((social) => (
                                <a
                                    key={social.id}
                                    href={social.url}
                                    aria-label={social.label}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className={cn(
                                        'transition-opacity',
                                        isOnAccent ? 'hover:opacity-75' : 'hover:text-foreground'
                                    )}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </CardFooter>
                )}
            </Card>
        );
    }
);
ProfileCardContent.displayName = 'ProfileCardContent';

export interface AnimatedProfileCardProps
    extends React.HTMLAttributes<HTMLDivElement> {
    baseCard: React.ReactNode;
    overlayCard: React.ReactNode;
    accentColor?: string;
    onAccentForegroundColor?: string;
    onAccentMutedForegroundColor?: string;
}

export const AnimatedProfileCard = React.forwardRef<
    HTMLDivElement,
    AnimatedProfileCardProps
>(
    (
        {
            className,
            accentColor = 'var(--primary)',
            onAccentForegroundColor = '#ffffff',
            onAccentMutedForegroundColor = 'rgba(255, 255, 255, 0.8)',
            baseCard,
            overlayCard,
            ...props
        },
        ref
    ) => {
        const containerRef = useRef<HTMLDivElement>(null);
        const overlayRef = useRef<HTMLDivElement>(null);

        const setContainerRef = React.useCallback(
            (node: HTMLDivElement | null) => {
                containerRef.current = node;
                if (typeof ref === 'function') {
                    ref(node);
                } else if (ref) {
                    (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
                }
            },
            [ref]
        );

        const initialClipPath = 'circle(37px at 64px 64px)';
        const hoverClipPath = 'circle(150% at 64px 64px)';

        useEffect(() => {
            if (overlayRef.current) {
                gsap.set(overlayRef.current, { clipPath: initialClipPath });
            }
        }, [initialClipPath]);

        const handleMouseEnter = () => {
            if (overlayRef.current) {
                gsap.killTweensOf(overlayRef.current);
                gsap.to(overlayRef.current, {
                    clipPath: hoverClipPath,
                    duration: 0.7,
                    ease: 'expo.inOut',
                });
            }
        };

        const handleMouseLeave = () => {
            if (overlayRef.current) {
                gsap.killTweensOf(overlayRef.current);
                gsap.to(overlayRef.current, {
                    clipPath: initialClipPath,
                    duration: 1.2,
                    ease: 'expo.out',
                });
            }
        };

        return (
            <div
                ref={setContainerRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={
                    {
                        '--accent-color': accentColor,
                        '--on-accent-foreground': onAccentForegroundColor,
                        '--on-accent-muted-foreground': onAccentMutedForegroundColor,
                    } as React.CSSProperties
                }
                className={cn(
                    'relative h-full w-full overflow-hidden rounded-[2.5rem] border border-white/10 group',
                    className
                )}
                {...props}
            >
                <div className='h-full w-full'>{baseCard}</div>
                <div
                    ref={overlayRef}
                    className={cn('absolute inset-0 h-full w-full z-10')}
                    style={{ clipPath: initialClipPath }}
                >
                    {overlayCard}
                </div>
            </div>
        );
    }
);
AnimatedProfileCard.displayName = 'AnimatedProfileCard';
