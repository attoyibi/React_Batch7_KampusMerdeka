import { create } from 'zustand';


const useStore = create((set) => ({
    userData: 0,
    incrementCount: (data) => {
        console.log('data : ', data)
        set((state) => ({
            userData: state.userData + parseInt(data)
        }))
    }


    // contoh jika menggunakan object
    // userData: {
    //     data1: 0,
    //     usernames: "Muchson",
    // }
    // incrementCount: () => {
    //     console.log('increment'); // Memanggil console.log di sini
    //     set((state) => ({
    //         userData: {
    //             ...state.userData,
    //             data1: state.userData.data1 + 1
    //         }
    //     })); // Mengupdate state
    // },


}))

export default useStore;