import { Button, Modal } from 'flowbite-react';
import { useState } from 'react';

export function Trailer({ title, url }) {
    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <Button onClick={() => setOpenModal(true)}>Ver Trailer</Button>
            <Modal show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header>{title}</Modal.Header>
                <Modal.Body>
                    <iframe width="590" height="315" src={url}></iframe>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => setOpenModal(false)}>Cerrar</Button>
                </Modal.Footer>
            </Modal >
        </>
    );
}
