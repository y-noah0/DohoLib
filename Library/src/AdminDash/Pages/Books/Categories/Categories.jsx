import { useNavigate } from "react-router-dom";
import Button from "../../../Defaults/Buttons/Button";
import Stats from "../../../Defaults/Stats/Stats";
import bookIcon from "../../../../assets/Images/status/bookIcon.png";
import totalbook from "../../../../assets/Images/status/totalBooks.png";
import overdue from "../../../../assets/Images/status/overdue.png";
import openedbook from "../../../../assets/Images/status/openedBook.png";

import styles from './Categories.module.css';

function Categories() {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate("/booklist");
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>Categories</h1>
                <Button variant="viewmore">
                    Add Book
                </Button>
            </div>
            <div className={styles.categories}>
                <Stats number="7821" description="All Books" icon={totalbook} onClick={handleCardClick} />
                <Stats number="96" description="Notes" icon={bookIcon} onClick={handleCardClick} />
                <Stats number="78" description="Sci-fi" icon={openedbook} onClick={handleCardClick} />
                <Stats number="120" description="Romance" icon={overdue} onClick={handleCardClick} />
                <Stats number="321" description="Education" icon={totalbook} onClick={handleCardClick} />
                <Stats number="96" description="Finance" icon={bookIcon} onClick={handleCardClick} />
            </div>
        </div>
    );
}

export default Categories;