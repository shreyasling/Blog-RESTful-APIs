const multer=require("multer");

const upload=multer({
    storage:multer.memoryStorage(),
    limit:{fileSize:1024*1024*50}
});
module.exports= upload;
