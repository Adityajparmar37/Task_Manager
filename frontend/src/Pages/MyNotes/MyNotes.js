import Create from '../../Components/Create/Create';
import Filter from '../../Components/Filter/Filter';
import Header from '../../Components/Header/Header';
import Notes from '../../Components/Notes/Notes';
import notes from '../../utils/data/data';
import { useAuth } from '../../Hooks/useAuth';

export default function MyNotes() {

    const { user } = useAuth();


    return (
        <>
            <Header />
            <div className='flex'>
                <Filter />
                <div className='grid grid-cols-3 gap-5 w-4/5 h-[39rem] mt-5 mx-auto'>
                    {notes.map((noteData, index) => (
                        <Notes key={index} title={noteData.title} text={noteData.content} date={"12/12/30"} category={noteData.category} />
                    ))}

                </div>
            </div>
            <Create />
        </>
    );
}
