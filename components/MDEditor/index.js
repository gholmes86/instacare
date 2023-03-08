

import dynamic from "next/dynamic"

// react-quill components
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false })

// react-quill styles
import "react-quill/dist/quill.snow.css"

// Custom styles for the MDEditor
import MDEditorRoot from "/components/MDEditor/MDEditorRoot"

// app context
import { useMaterialUIController } from "/context"

function MDEditor(props) {
  const [controller] = useMaterialUIController()
  const { darkMode } = controller

  return (
    <MDEditorRoot ownerState={{ darkMode }}>
      <ReactQuill theme="snow" {...props} />
    </MDEditorRoot>
  )
}

export default MDEditor
