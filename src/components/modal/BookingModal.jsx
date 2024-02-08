import { Button, Datepicker, Label, Modal, Select, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { useEntradas } from '../../hooks/useEntradas';

export function BookingModal({ name, imagen }) {
    const [openModal, setOpenModal] = useState(false);
    const [email, setEmail] = useState();
    const [nombre, setNombre] = useState();
    const [date, setDate] = useState(Date.now());
    const [hour, setHour] = useState("10:00");
    const [seat, setSeat] = useState(1);
    const [precio, setPrecio] = useState(9.99)
    const { useGuardarEntradas } = useEntradas()

    function handleCompra(nombre, email) {
        const data = {
            name: nombre,
            email: email,
            anime: name,
            date: date,
            hour: hour,
            seat: seat,
            precio: precio,
            imagen: imagen,
        }
        setOpenModal(false)

        useGuardarEntradas(data)
    }
    function handleSeatChange(e) {
        setSeat(e)
        setPrecio(9.99 * e)
    }
    return (
        <>
            <Button className='w-[10em]' onClick={() => setOpenModal(true)}><p className='text-white'>Reservar</p></Button>
            <Modal show={openModal} size="md" popup onClose={() => setOpenModal(false)}>
                <Modal.Header />
                <Modal.Body>
                    <div className="space-y-6">
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
                            <Datepicker onSelectedDateChanged={(e) => setDate(e)} />
                        </div>
                        <div>
                            <div className="flex items-center justify-between m-3 ">
                                <Label value="Asientos" />
                                <Label value="Hora" />
                            </div>
                            <div className='flex items-center justify-around'>
                                <Select id="asientos" className='w-[47%]' onChange={(e) => handleSeatChange(e.target.value)} required>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </Select>
                                <Select id="hora" className='w-[47%]' onChange={(e) => setHour(e.target.value)} required>
                                    <option value="10:00">10:00</option>
                                    <option value="13:00">13:00</option>
                                    <option value="20:00">20:00</option>
                                    <option value="23:00">23:00</option>
                                </Select>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div className='flex items-center justify-between w-[200px]'>
                                <Button onClick={() => handleCompra(nombre, email, name)}><p className='text-white'>Compra</p></Button>
                                <Button color='failure' onClick={() => setOpenModal(false)}><p className='text-white'>Cancelar</p></Button>
                            </div>
                            <p className="text-cyan-700 mt-2">
                                <strong className='text-cyan-700'>Precio: {precio} €</strong>
                            </p>
                        </div>
                        <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}
