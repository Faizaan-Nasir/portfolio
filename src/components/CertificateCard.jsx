export default function CertificateCard({ title, issuer, image, link }) {
    return (
        <div className='certificate-card' onClick={() => window.open(link, '_blank')} style={{ backgroundImage: `url(${image})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
            <div className='certificate-description'>
                <div className='certificate-title'>{title}</div>
                <div className='certificate-issuer'>By {issuer}</div>
            </div>
        </div>
    )
}