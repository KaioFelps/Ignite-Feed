import { ImgHTMLAttributes } from "react"
import styles from "./avatar.module.css"

/*---

ANTES:

type AvatarProps = {
    hasBorder?: boolean;
    src: string;
    alt?: string;
}

---*/

type AvatarProps = ImgHTMLAttributes<HTMLImageElement> & {
    hasBorder?: boolean;
}

/*---
    Isso acontece pois agora o avatarProprs herdou todas as propriedades do IMGHTMLAttributes, que já continha o src e alt opcionais.


PARÂMETRO DA FUNCTION ANTES:--------------------------------
    <img
    className={hasBorder ? styles.avatarWithBorders : styles.avatar}
        src={src}
        alt={alt} 
        title={title}
    />

depois: rest operator
    <img
        className={hasBorder ? styles.avatarWithBorders : styles.avatar}
        {...props}
    />


---*/

export function Avatar({ hasBorder = true, ...props }: AvatarProps) {

    return (
        <img
        className={hasBorder ? styles.avatarWithBorders : styles.avatar}
        {...props}
        />
    )
}