import { ComponentType, useEffect, useState } from "react";
import { Loading } from "../utils/Loading";
import { fetchHero, HeroType } from "./heroes";

interface InternalHocProps {
    hero: HeroType;

}

interface PassedInProps {
    disabled: boolean;
    isLoggedIn: boolean;
}

export function withLoading<T>(WrappedComponent: ComponentType<T>) {
    return function WrappedRender({disabled,isLoggedIn}: PassedInProps, {...rest}: Omit<T, keyof InternalHocProps>) {
        const [hero, setHero] = useState<HeroType | null>(null)
        const [isLoading, setIsLoading] = useState(true)
        useEffect(() => {
            fetchHero().then(hero => {
                console.log(hero)
                setHero(hero)
                setIsLoading(false)
            })
        }, [])
        // const { hero, ...rest } = props;
        return isLoading ? <Loading /> : <WrappedComponent {...rest as T} hero={hero}  />
    }
}