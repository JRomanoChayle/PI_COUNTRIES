import { NavLink } from "react-router-dom";
import style from './landing.module.css';

const Landing = () => {
    return (
        <div className={style.landingContain}>
            <div className={style.landingSubContain}>
                <h1 className={style.landingTitle}>Countries PI 🌍 </h1>
                <p className={style.landingMsg}>Welcome to the bigest countries database!</p>
                <NavLink to='/home'>
                    <button className={style.landingBtn}>Enter</button>
                </NavLink>
            </div>
        </div>
    )
}
export default Landing;