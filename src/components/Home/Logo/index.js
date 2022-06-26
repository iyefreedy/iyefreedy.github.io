import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import LogoS from '../../../assets/images/logo-q-new.png'
import './index.scss'

const Logo = () => {
    const bgRef = useRef()
    const outlineLogoRef = useRef()
    const solidLogoRef = useRef()

    useEffect(() => {
        gsap.registerPlugin(DrawSVGPlugin)

        gsap
            .timeline()
            .to(bgRef.current, {
                duration: 1,
                opacity: 1,
            }).from(outlineLogoRef.current, {
                drawSVG: 1,
                duration: 20,
            })

        gsap.fromTo(
            solidLogoRef.current,
            {
                opacity: 0,
            },
            {
                opacity: 1,
                delay: 4,
                duration: 4,
            }
        )
    }, [])

    return (
        <div className="logo-container" ref={bgRef}>
            <img
                className="solid-logo"
                ref={solidLogoRef}
                src={LogoS}
                alt="JavaScript,  Developer"
            />

            <svg
                width="559pt"
                height="897pt"
                version="1.0"
                viewBox="0 0 559 897"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g
                    className="svg-container"
                    transform="translate(0 457) scale(.1 -.1)"
                    fill="none"

                >
                    <path
                        ref={outlineLogoRef}
                        d="M4080 12789 c-610 -67 -1186 -337 -1735 -812 -141 -121 -413 -399
                            -536 -547 -866 -1039 -1482 -2535 -1708 -4150 -62 -447 -89 -792 -98 -1270
                            -19 -1103 144 -2163 473 -3056 490 -1335 1319 -2261 2277 -2544 128 -37 1575
                            -365 1711 -387 148 -24 521 -24 681 1 621 95 1242 418 1754 912 65 63 125 114
                            133 114 8 0 223 -47 478 -105 341 -77 480 -105 530 -105 184 0 364 118 507
                            332 218 328 304 807 218 1221 -41 200 -97 314 -269 546 l-135 184 15 36 c399
                            939 639 1980 726 3156 17 226 17 1046 0 1270 -89 1186 -335 2139 -766 2970
                            -515 992 -1249 1656 -2056 1859 -227 57 -1521 345 -1620 361 -125 19 -459 28
                            -580 14z m1183 -2636 c717 -625 1145 -1879 1114 -3268 -7 -299 -16 -415 -52
                            -710 -37 -293 -26 -278 -121 -154 -88 113 -144 165 -224 205 -75 38 -1422 344
                            -1542 351 -107 7 -194 -17 -288 -78 -404 -261 -609 -1026 -429 -1599 53 -169
                            77 -205 670 -1002 l568 -763 -42 -38 c-288 -257 -588 -432 -884 -515 l-72 -20
                            -73 62 c-465 399 -820 1051 -1002 1836 -400 1732 40 3795 1062 4982 325 378
                            730 659 1117 773 44 13 84 24 89 24 4 1 54 -38 109 -86z"
                    />
                </g>
            </svg>
        </div>
    )
}

export default Logo