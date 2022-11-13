import React, { useContext, useEffect } from 'react'
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import CardJourney from '../components/CardJourney'
import NavbarAfterLogin from '../components/NavbarAfterLogin';
import { UserContext } from '../context/UserContext';
import Swal from 'sweetalert2';
import { API } from "../config/API";
import { FaBookmark } from "react-icons/fa"
import { FaRegBookmark } from "react-icons/fa"
import { FaHeart } from "react-icons/fa"
import { FaRegHeart } from "react-icons/fa"

function Bookmark() {
    const [state] = useContext(UserContext);
    console.log("ini state profile bookmark yak ges yak", state.user)
    const isLogin = state.isLogin;

    let navigate = useNavigate();
    let { data: bookmarks, refetch: yukRefetch } = useQuery(
        "bookmarksCache", async () => {
            const response = await API.get("/bookmarks");
            console.log("ini response get bookmark ygy", response)
            const resultResponse = response.data.data
            console.log("ini resultResponse uhuyy", bookmarks)

            const resultFilter = resultResponse.filter(
                (data) => data.user.id === state.user.id
            );
            console.log("resulFilter weyy", resultFilter);
            return resultFilter
        }
    );
    console.log("ini isi bookmark : ", bookmarks)

    const handleDelete = async (e, bookmarkId) => {
        e.preventDefault();
        try {
            console.log("mau delete yg ini ygy", state.user.id);

            const config = {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            };
            console.log("mau cek data", bookmarkId, state.user.id);

            const response = await API.delete(`/bookmark/${bookmarkId}`, config);
            console.log("ini response delete ygy", response);
            yukRefetch();
            navigate('/Bookmark')
        } catch (error) {
            console.log("waduh deletenya error", error);
        }
    };

    useEffect(() => {
        if (!localStorage.getItem("token")) {
            Swal.fire({
                icon: "error",
                title: "Heyyoo!",
                text: "You have to login first~",
            });
            navigate("/")
        }
    }, []);



    return (
        <div>
            <NavbarAfterLogin />
            <div className='container'>
                <h2 className='text-start py-4 heading-journey'>Bookmark</h2>
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    {bookmarks?.map((bookmark, index) => {
                        return (
                            <div className="col pt-4" key={index}>
                                <div className="card h-100">
                                    <img src={"http://localhost:5000/uploads/" + bookmark?.journey.image}
                                        className="card-img-top"
                                        alt="..."
                                        style={{
                                            maxHeight: "50%",
                                            minHeight: "50%",
                                            objectFit: "cover",
                                        }} />
                                    <div className="card-body">
                                        {isLogin ? (
                                            <div className='d-flex pb-3 ms-auto'>
                                                {/* <span className='pe-1'><FaRegHeart /></span> */}
                                                <p className="card-text">{bookmark.journey.user.name}</p>
                                                <span className='pe-1 ms-auto' onClick={(e) => {
                                                    Swal.fire({
                                                        title: 'Do you want to delete this journey from bookmark?',
                                                        showDenyButton: true,
                                                        showCancelButton: true,
                                                        confirmButtonText: 'Delete',
                                                        denyButtonText: `Cancel`,
                                                    }).then((result) => {
                                                        /* Read more about isConfirmed, isDenied below */
                                                        if (result.isConfirmed) {
                                                            Swal.fire({
                                                                icon: "success",
                                                                title: "Delete Success!",
                                                                showConfirmButton: true,
                                                                onClick: handleDelete(e, bookmark.id),
                                                            });
                                                        } else if (result.isDenied) {
                                                            Swal.fire('Journey are not delete', '', 'info')
                                                        }
                                                    })
                                                }}><FaRegBookmark /></span>
                                                {/* <Link to="/Bookmark">
                                        </Link> */}
                                                {/* <span className='pe-1'><FaHeart /></span>
                                        <span><FaBookmark /></span> */}
                                            </div>
                                        ) : (
                                            <div className='d-flex pb-3'>
                                                <span className='pe-1'><FaRegHeart /></span>
                                                <span className='pe-1' onClick={(e) => {
                                                    Swal.fire({
                                                        icon: 'error',
                                                        title: 'Oops...',
                                                        text: 'Anda Belum Login, Silahkan Login!',
                                                    })
                                                }}><FaBookmark /></span>
                                                {/* <Link to="/Bookmark">
                                        </Link> */}
                                                {/* <span className='pe-1'><FaHeart /></span>
                                        <span><FaBookmark /></span> */}
                                            </div>
                                        )}
                                        <h5 className="card-title" onClick={() => { navigate(`/DetailJourney/${bookmark.journey.id}`) }} key={index}>{bookmark.journey.title.slice(0, 20)} ..</h5>
                                        {/* <div className='d-flex'>
                                    </div> */}
                                        <p className="card-text text-justify">{bookmark.journey.description.slice(0, 120)} ...</p>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    )}
                </div>
            </div>
        </div>
    )
}

export default Bookmark;