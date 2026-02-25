import { useState, useEffect } from 'react';
import CertificateCard from './CertificateCard';
import Dropdown from './Dropdown';

export default function Certificates({ client }) {
    const [certificates, setCertificates] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('Show All');
    useEffect(() => {
        client.getEntries({ content_type: 'certificates' })
            .then((response) => setCertificates(response.items))
            .catch(console.error);
    }, [client]);
    const categories = [...new Set(certificates.map((certificate) => certificate.fields.category))];
    return (
        <>
            <h1 className='content-title'>Certificates</h1>
            <hr className='hr-content' />
            <Dropdown categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
            <div className='certificates-grid'>
                {certificates.map((certificate) => (
                    selectedCategory === 'Show All' || certificate.fields.category === selectedCategory ? (
                        <CertificateCard
                            title={certificate.fields.certificateName}
                            issuer={certificate.fields.issuedBy}
                            image={certificate.fields.certificatePreview.fields.file.url}
                            link={certificate.fields.certificatePdf.fields.file.url}
                        />) : null
                ))}
            </div>
        </>
    )
}