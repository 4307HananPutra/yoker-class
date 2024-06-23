'use client';
import Image from 'next/image';
import camera1 from '../../public/camera1.svg';
import Add from '../../public/Add.svg';
import Profile from '../../public/Profile.svg';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function TaskModal() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleClick = () => {
    router.push('/add-class');
  };

  return (
    <div>
      <div className="flex justify-end ">
        <button className="btn bg-base-100 hover:bg-slate-200 shadow-xl" onClick={handleOpen}>Tambah Kelas</button>
      </div>
      {isOpen && (
        <dialog id="my_modal_3" className="modal" open>
          <div className="modal-box h-[90%] outline-1 outline w-96 shadow-xl overflow-hidden">
            <form method="dialog" className="flex justify-end mb-8">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={handleClose}>✕</button>
            </form>
            <div className='w-full h-[12%] outline-1 outline mb-5 rounded-md'>
              <h4 className='px-4 font-medium'>Saat ini anda sedang login sebagai</h4>
              <div className='flex items-center'>
                <Image src={Profile} alt="Profile" width={63} height={63} />
                <div>
                  <p className='text-sm'>PutriKecilAyah</p>
                  <p className='text-xs'>PutriKecil@gmail.com</p>
                </div>
              </div>
            </div>
            <div className='flex items-center w-full px-2 hover:cursor-pointer h-[10%] outline-1 outline mb-2 rounded-md' onClick={handleClick}>
              <Image src={Add} alt="Add" width={50} height={50} />
              <p>Tambah Kelas</p>
            </div>
            <p className='mb-2'>Gabung dengan Kode</p>
            <input type="text" placeholder="Kode Kelas" className="input input-bordered w-full mb-5 rounded-md outline-1 outline h-[10%]" />
            <div className='flex flex-col gap-3 justify-center items-center w-full h-[45%] outline-1 outline rounded-md'>
              <p className='font-normal mr-3'>Gabung dengan QR Code</p>
              <Image src={camera1} alt="qrcode" width={150} height={150} />
              <input type="file" className="file-input file-input-bordered file-input-sm w-full max-w-[250px]" />
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
}
