import axios from "axios";
async function getdata(): Promise<User> {
    try {
        const response = await axios.get<User>("http://localhost:3000/api/v1/user/details");
        return response.data;
    }
    catch (e) {
        console.log(e);
        throw new Error("Failed to fetch user data.");
    }

}
interface User {
    name: string;
    email: string;
    address: {
        city: string;
        state: string;
        houseNumber: string;
    };
}

export default async function User() {
    const user: User = await getdata();

    return (
        <div className="max-w-sm mx-auto bg-white rounded-xl shadow-lg overflow-hidden md:max-w-2xl my-6">
            <div className="md:flex">
                <div className="p-8 w-full">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">User Profile</div>
                    <h1 className="block mt-1 text-2xl leading-tight font-medium text-black">
                        { user.name }
                    </h1>
                    <p className="mt-2 text-gray-500">
                        <span className="font-medium text-gray-700">Email:</span> { user.email }
                    </p>
                    <div className="mt-4">
                        <p className="text-gray-500">
                            <span className="font-medium text-gray-700">Address:</span>
                        </p>
                        <ul className="list-none pl-0 mt-1 space-y-1">
                            <li className="text-gray-600">
                                <span className="font-light">House No:</span> { user.address.houseNumber}
                            </li>
                            <li className="text-gray-600">
                                <span className="font-light">City:</span> { user.address.city }
                            </li>
                            <li className="text-gray-600">
                                <span className="font-light">State:</span> {user.address.state }
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}