const axios=require('axios');

const codeExcecuter=async(req,res)=>{
    try{
        const{language,code,stdin=""}=req.body;
        const pistonResponse=await axios.post(
            'https://emkc.org/api/v2/piston/execute',
            {
                language:language,
                version:"*",
                files:[
                    {
                        content:code
                    }
                ],
                stdin:stdin,
            }
        );

        const run=pistonResponse.data.run;
        res.status(200).json({
            succcess:true,
            stdout:run.stdout,
            stderr:run.stderr,
            output:run.output,
            exitCode:run.code
        })
    }
    catch(err){
        res.status(500).json({
            success:false,
            message:"Error in the code controller"+err.message
        })
    }
}

module.exports=codeExcecuter;