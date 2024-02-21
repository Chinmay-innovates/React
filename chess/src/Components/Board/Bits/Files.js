import "./Files.css";

const Files = ({ files }) => {
  return (
    <div>
      {files.map((file) => (
        <span key={file} className="files">{file}</span>
      ))}
    </div>
  );
};

export default Files;
