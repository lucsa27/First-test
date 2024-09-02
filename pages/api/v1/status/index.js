function status(request, response) {
  response.status(200).json({ chave: "Messi" });
}

export default status;
