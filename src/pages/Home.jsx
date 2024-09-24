import Checkbox from "../components/Checkbox.jsx";
import "../styles/Home.css";

const Home = () => {
    return(
        <>
            <div className="home">
                <h1>69 Soft++</h1>
                <form className="checkboxes" action="">
                    <Checkbox id='boba1' nameForCheckBox='Boba Drink 1'/>
                    <Checkbox id='boba2' nameForCheckBox='Boba Drink 2'/>
                    <Checkbox id='boba3' nameForCheckBox='Boba Drink 3'/>
                    <Checkbox id='eat1' nameForCheckBox='Eat Out 1'/>
                    <Checkbox id='eat2' nameForCheckBox='Eat Out 2'/>
                    <Checkbox id='eat3' nameForCheckBox='Eat Out 3'/>
                    <Checkbox id='rock1' nameForCheckBox='Day 1 of Rock Climbing'/>
                    <Checkbox id='rock2' nameForCheckBox='Day 2 of Rock Climbing'/>
                    <Checkbox id='rock2' nameForCheckBox='Day 2 of Rock Climbing'/>
                    <Checkbox id='stretch' nameForCheckBox='Stretch for Today'/>
                    <Checkbox id='leetcode' nameForCheckBox='Leetcode'/>
                    <Checkbox id='chess' nameForCheckBox='Chess Puzzle'/>
                    <Checkbox id='duolingo' nameForCheckBox='Duolingo'/>
                    <Checkbox id='github' nameForCheckBox='Github Push'/>
                </form>
            </div>
        </>
    );
}

export default Home;