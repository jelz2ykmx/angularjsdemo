namespace WValidicImport
{
    partial class Menu
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.menuStrip1 = new System.Windows.Forms.MenuStrip();
            this.importToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.userFirstTimeToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.lastChangesToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.exportToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.cVSToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.menuStrip1.SuspendLayout();
            this.SuspendLayout();
            // 
            // menuStrip1
            // 
            this.menuStrip1.Items.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.importToolStripMenuItem,
            this.exportToolStripMenuItem});
            this.menuStrip1.Location = new System.Drawing.Point(0, 0);
            this.menuStrip1.Name = "menuStrip1";
            this.menuStrip1.Size = new System.Drawing.Size(284, 24);
            this.menuStrip1.TabIndex = 0;
            this.menuStrip1.Text = "menuStrip1";
            // 
            // importToolStripMenuItem
            // 
            this.importToolStripMenuItem.DropDownItems.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.userFirstTimeToolStripMenuItem,
            this.lastChangesToolStripMenuItem});
            this.importToolStripMenuItem.Name = "importToolStripMenuItem";
            this.importToolStripMenuItem.Size = new System.Drawing.Size(55, 20);
            this.importToolStripMenuItem.Text = "Import";
            // 
            // userFirstTimeToolStripMenuItem
            // 
            this.userFirstTimeToolStripMenuItem.Name = "userFirstTimeToolStripMenuItem";
            this.userFirstTimeToolStripMenuItem.Size = new System.Drawing.Size(152, 22);
            this.userFirstTimeToolStripMenuItem.Text = "User First Time";
            this.userFirstTimeToolStripMenuItem.Click += new System.EventHandler(this.userFirstTimeToolStripMenuItem_Click);
            // 
            // lastChangesToolStripMenuItem
            // 
            this.lastChangesToolStripMenuItem.Name = "lastChangesToolStripMenuItem";
            this.lastChangesToolStripMenuItem.Size = new System.Drawing.Size(152, 22);
            this.lastChangesToolStripMenuItem.Text = "Last Changes";
            this.lastChangesToolStripMenuItem.Click += new System.EventHandler(this.lastChangesToolStripMenuItem_Click);
            // 
            // exportToolStripMenuItem
            // 
            this.exportToolStripMenuItem.DropDownItems.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.cVSToolStripMenuItem});
            this.exportToolStripMenuItem.Name = "exportToolStripMenuItem";
            this.exportToolStripMenuItem.Size = new System.Drawing.Size(52, 20);
            this.exportToolStripMenuItem.Text = "Export";
            // 
            // cVSToolStripMenuItem
            // 
            this.cVSToolStripMenuItem.Name = "cVSToolStripMenuItem";
            this.cVSToolStripMenuItem.Size = new System.Drawing.Size(152, 22);
            this.cVSToolStripMenuItem.Text = "CVS";
            this.cVSToolStripMenuItem.Click += new System.EventHandler(this.cVSToolStripMenuItem_Click);
            // 
            // Menu
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(284, 261);
            this.Controls.Add(this.menuStrip1);
            this.MainMenuStrip = this.menuStrip1;
            this.Name = "Menu";
            this.Text = "Menu";
            this.menuStrip1.ResumeLayout(false);
            this.menuStrip1.PerformLayout();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.MenuStrip menuStrip1;
        private System.Windows.Forms.ToolStripMenuItem importToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem userFirstTimeToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem lastChangesToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem exportToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem cVSToolStripMenuItem;
    }
}