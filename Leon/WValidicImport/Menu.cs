using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace WValidicImport
{
    public partial class Menu : Form
    {
        public Menu()
        {
            InitializeComponent();
        }

        private void lastChangesToolStripMenuItem_Click(object sender, EventArgs e)
        {
            Import form = new Import();

            form.ShowDialog();
        }

        private void userFirstTimeToolStripMenuItem_Click(object sender, EventArgs e)
        {
            ImportUser form = new ImportUser();

            form.ShowDialog();

        }

        private void cVSToolStripMenuItem_Click(object sender, EventArgs e)
        {
            Export form = new Export();

            form.ShowDialog();

        }
    }
}
