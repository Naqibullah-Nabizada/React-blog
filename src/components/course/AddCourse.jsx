import { Link } from 'react-router-dom';
import Button from '@mui/material/Button'

const AddCourse = ({ authors }) => {
    return (
            <section className="container d-flex mt-3">
                <div className='col-4'>
                    <form action='' method='POST' className='text-end'>
                        <div>
                            <label className='form-label'>عنوان: </label>
                            <input type="text" name='title' className="form-control mb-2" placeholder='نام دوره' />
                        </div>
                        <div>
                            <label className='form-label'>توضیحات: </label>
                            <textarea name='description' className='form-control mb-2' rows='5'></textarea>
                        </div>
                        <div>
                            <label className='form-label'>تصویر دوره :</label>
                            <input type="file" name='image' className="form-control mb-2" />
                        </div>
                        <div>
                            <label className='form-label'>نویسنده: </label>
                            <select name='author' className='form-control mb-2'>
                                <option unselectable='on'>انتخاب نویسنده</option>
                                {
                                    authors.map((author) => (
                                        <option key={author.id} value={author.id}>{author.name}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div>
                            <label className='form-label'>زمان مطالعه: </label>
                            <input type="number" name='time' className="form-control mb-2" placeholder='زمان مطالعه' />
                        </div>
                    </form>
                    <div className='mt-4'>
                        <button className='btn btn-success mx-3'>ثبت دوره</button>
                        <Link to={"/"} className="btn btn-secondary" >بازگشت</Link>
                    </div>
                </div>
                <div className='col-8'>
                    <img src={require('../../assets/man-taking-note.png')} alt="img" className='img-fluid w-100' />
                </div>
            </section>
    )
}

export default AddCourse;