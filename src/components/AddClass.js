'use client';
import Image from 'next/image';
import Camera from '../../public/Camera.svg';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function TaskModal() {
  const [isOpen, setIsOpen] = useState(true);
  const router = useRouter();

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    router.push('/');
  };

  const handleClick = () => {
    router.push('/');
  };

  return (
    <div>
      <div className="flex justify-end ">
        <button className="btn bg-base-100 hover:bg-slate-200 shadow-xl" onClick={handleOpen}>Tambah Kelas</button>
      </div>
      {isOpen && (
        <dialog id="my_modal_3" className="modal" open>
          <div className="modal-box h-[90%] outline-1 outline w-[30%] shadow-xl overflow-hidden">
            <form method="dialog" className="flex justify-end mb-8">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={handleClose}>✕</button>
            </form>
            <div className='w-full h-[95%] flex flex-col items-center'>
                <h1 className='font-medium text-3xl mb-5'>Buat Kelas Anda</h1>
                <p className='text-center'>berikan kepribadian pada kelas baru Anda <br/>
                dengan nama dan ikon, Anda dapat mengubahnya nanti.</p>
                <div className="w-44 h-44 rounded-full flex justify-center outline-dashed outline-1 mt-5 pb-5 hover:cursor-pointer">
                    <Image src={Camera} alt="Camera" width={110} height={110} />
                </div>
                <label className="form-control w-[90%] mb-5">
                    <div className="label">
                        <span className="label-text text-lg">Nama Dosen</span>
                    </div>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                </label>
                <label className="form-control w-[90%] mb-5">
                    <div className="label">
                        <span className="label-text text-lg">Nama Kelas</span>
                    </div>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                </label>
                <div className='flex justify-around gap-5 w-full'>
                    <button className="btn h-11 w-40 rounded-xl bg-[#5686E1] text-white" onClick={handleClick}>Back</button>
                    <button className="btn h-11 w-40 rounded-xl bg-[#5686E1] text-white">Create</button>
                </div>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
}
