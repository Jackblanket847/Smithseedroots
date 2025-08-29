# scripts/convert.py
import os
import pandas as pd
import json

# Load conversion rates (example: USD → EUR, GBP, JPY)
with open("config.json") as f:
    rates = json.load(f)["rates"]

input_folder = "transactions/input/"
output_folder = "transactions/output/"

# Loop through all input files
for file in os.listdir(input_folder):
    if file.endswith(".csv"):
        df = pd.read_csv(os.path.join(input_folder, file))

        # Expecting column "amount" in base currency (e.g., USD)
        for currency, rate in rates.items():
            df[f"amount_{currency}"] = df["amount"] * rate

        # Save results
        out_path = os.path.join(output_folder, f"converted_{file}")
        df.to_csv(out_path, index=False)
        print(f"✅ Converted {file} → {out_path}")