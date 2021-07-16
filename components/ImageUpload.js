import { API_URL } from "@/config/index"
import styles from '@/styles/Form.module.css'
import { useState } from "react"

export default function ImageUpload({ evtId, imageUploaded }) {

  const [image, setImage] = useState(null)

  const handleFileChange = e => {
    e.preventDefault()
    setImage(e.target.files[0]);
  }


  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('files', image)
    formData.append('ref', 'events')
    formData.append('refId', evtId)
    formData.append('field', 'image')

    const res = await fetch(`${API_URL}/upload`, {
      method: 'POST',
      body: formData
    })

    if (res.ok) {
      imageUploaded()
    }
  }

  return (
    <div className={styles.form}>
      <h1>Upload Event Image</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.file}>
          <input type="file" onChange={handleFileChange} />
        </div>
        <input type="submit" value="Upload" className="btn" />
      </form>

    </div>
  )
}
