const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark shadow-lg">
            <div className="container">

                <div className="row w-100">

                    <div className="col navbar-brand">
                        <i className="fa fa-laptop text-warning" />
                        <span className="mx-1">آموزشگاه برنامه نویسی <span className="text-primary">برنامه نویسان</span> </span>
                    </div>
                    <div className="col">
                        <div className="input-group w-75" dir="ltr">
                            <i className="fa fa-search input-group-text"/>
                            <input type="text" className="form-control" placeholder="جستجو" dir="rtl" />
                        </div>
                    </div>
                </div>
            </div>

        </nav>
    )
}

export default Navbar;