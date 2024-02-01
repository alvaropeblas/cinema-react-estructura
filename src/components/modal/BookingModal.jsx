import { Button, Datepicker, Label, Modal, Select, TextInput } from 'flowbite-react';
import { useState } from 'react';

export function BookingModal({ name }) {
    const [openModal, setOpenModal] = useState(false);
    const [email, setEmail] = useState();
    const [nombre, setNombre] = useState();
    const [date, setDate] = useState();
    const [hour, setHour] = useState();
    const [seat, setSeat] = useState();

    function handleCompra(nombre, email) {
        const data = {
            name: nombre,
            email: email,
            anime: name,
        }
        console.log(data);
    }
    return (
        <>
            <Button onClick={() => setOpenModal(true)}>Reservar</Button>
            <Modal show={openModal} size="md" popup onClose={() => setOpenModal(false)}>
                <Modal.Header />
                <Modal.Body>
                    <form className="space-y-6">
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">Tu pedido: {name}</h3>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="nombre" value="Nombre completo" />
                            </div>
                            <TextInput id="nombre" placeholder='Hayao Miyazaki' onChange={(e) => setNombre(e.target.value)} required />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="email" value="Email" />
                            </div>
                            <TextInput id="email" type="email" onChange={(e) => setEmail(e.target.value)} placeholder='studio@ghibli.jp' required />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="date" value="Fecha" />
                            </div>
                            <Datepicker />
                        </div>
                        <div>
                            <div className="flex items-center justify-between m-3 ">
                                <Label value="Asientos" />
                                <Label value="Hora" />
                            </div>
                            <div className='flex items-center justify-around'>
                                <Select id="asientos" className='w-[47%]'>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </Select>
                                <Select id="hora" className='w-[47%]'>
                                    <option value="10">10:00</option>
                                    <option value="13">13:00</option>
                                    <option value="20">20:00</option>
                                    <option value="23">23:00</option>
                                </Select>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div className='flex items-center justify-between w-[200px]'>
                                <Button onClick={() => handleCompra(nombre, email, name)}>Compra</Button>
                                <Button color="failure" onClick={() => setOpenModal(false)}>Cancelar</Button>
                            </div>
                            <p className="text-cyan-700 mt-2">
                                <strong className='text-cyan-700'>Precio: 9.99 €</strong>
                            </p>
                        </div>
                        <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    );
}
