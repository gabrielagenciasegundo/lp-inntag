const WEBHOOK_URL =
    "https://flow.agenciasegundo.com/webhook/626aba55-51dc-4bcf-84c9-c31039f42827";
const MAX_FILE_SIZE_BYTES = 3 * 1024 * 1024;

export async function POST(request: Request) {
    try {
        const formData = await request.formData();
        const telefone = String(formData.get("telefone") ?? "");
        const telefoneDigits = telefone.replace(/\D/g, "");
        const contaEnergia = formData.get("conta_energia");

        if (telefoneDigits.length !== 11) {
            return Response.json(
                { ok: false, error: "Telefone inválido. Use DDD + 9 dígitos." },
                { status: 400 },
            );
        }

        if (contaEnergia instanceof File && contaEnergia.size > MAX_FILE_SIZE_BYTES) {
            return Response.json(
                { ok: false, error: "Arquivo excede o limite de 3MB." },
                { status: 400 },
            );
        }

        formData.set("telefone", telefoneDigits);
        formData.append("origem", "site-inntag-solar");

        const webhookResponse = await fetch(WEBHOOK_URL, {
            method: "POST",
            body: formData,
        });

        if (!webhookResponse.ok) {
            return Response.json(
                { ok: false, error: "Falha ao enviar para webhook" },
                { status: 502 },
            );
        }

        return Response.json({ ok: true });
    } catch {
        return Response.json(
            { ok: false, error: "Falha ao processar formulário" },
            { status: 500 },
        );
    }
}
